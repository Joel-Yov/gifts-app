import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  amigos = signal<string[]>([
    "https://engrupoviajes.com/wp-content/uploads/2023/08/POST-BLOG-1209-Peregrinar-hace-comunidad--400x400.jpg.webp",
    "https://engrupoviajes.com/wp-content/uploads/2023/05/POST-Viajar-en-grupo-por-Espa%C3%B1a-mejor-con-amigos-400x400.jpg.webp",
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Hoffl%C3%B6th%28T%C3%B6Vo-Cl%C3%B6rath%29-2%28400x400%29.jpg",
    "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/scarlet-macaw-square-2-400x400.jpg.optimal.jpg",
    "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/jaguar-square-1-400x400.jpg.optimal.jpg",
    "https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34",
    "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.optimal.jpg",
    "https://wethrivewellbeing.com/wp-content/uploads/elementor/thumbs/friends-qokd8sk1lx7uxoxsdkb9tnq6v476xg4ok9a9nji0tc.png",
    "https://www.brit.co/media-library/image.jpg?id=54530426&width=400&height=400",
    "https://pyxis.nymag.com/v1/imgs/cd7/052/8fa258f0ffcb6d5ca32553e96c7e25b79b-18-shared-memories.rsquare.w400.jpg",
    "https://wildmountainimmigration.com/wp-content/uploads/2024/06/how-to-make-friends-in-edmonton-a-comprehensive-guide.jpg",
    "https://i.pinimg.com/474x/ae/31/11/ae311139d8611bb57f500b0b55fcec2e.jpg"
  ])
}
