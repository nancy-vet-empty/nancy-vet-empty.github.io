import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";
import { DialogService      } from "nv@services/dialog.service";
import { GalleryModal       } from "../gallery/gallery.component";

@Component({
  selector    : 'modal--detail',
  templateUrl : './detail.component.html',
  styleUrl    : './detail.component.scss'
})
export class DetailModal {

  private modalController: ModalController  = inject(ModalController);
  private dialogService: DialogService      = inject(DialogService);
  public selectedObject: any;

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   */
  public async onGalleryOpen() {
    // Wait for the gallery images to be built
    const galleryImages = await this.buildGalleryImages(this.selectedObject.code);

    // Open the gallery modal and pass the valid image paths
    await this.dialogService.open(GalleryModal, {
      selectedObject: galleryImages
    });
  }


  /**
   * Function to build the gallery image paths
   */

  private buildGalleryImages(code: string): Promise<string[]> {
    const images: any = [];
    const maxImages = 10; // The maximum number of images per breed

    const promises = [];

    for (let i = 1; i <= maxImages; i++) {
      const imagePath = `assets/pdfs/@breeds/dog/${code}/${i}.png`;

      // Check if the image exists by trying to load it
      const promise = this.checkImageExists(imagePath).then((exists) => {
        if (exists) {
          images.push(imagePath); // Only add the image if it exists
        }
      });

      promises.push(promise);
    }

    // Return a promise that resolves when all image checks are done
    return Promise.all(promises).then(() => images);
  }

  /**
   * Function to check if an image exists by loading it
   */
  private checkImageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true); // Image loaded successfully
      img.onerror = () => resolve(false); // Image failed to load
      img.src = url;
    });
  }


}
