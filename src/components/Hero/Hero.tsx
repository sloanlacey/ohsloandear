import avatar from '../../img/avatar-sloan.jpeg';

const Hero = () => {
  return (
    <section className="h-auto m-auto mb-24 max-w-full-width-wrap">
      <div className="flex flex-row space-x-24">
        <div className="flex basis-1/2">
          <img src={avatar} alt="" className="rounded-md" />
        </div>
        <div className="flex text-center align-middle rounded-md basis-1/2 bg-dark-green">
          <p className="text-background-black">Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero;