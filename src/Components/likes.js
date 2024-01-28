

function likes_storage(trailSelected, likeStorage, setLikes) {
    const id = trailSelected.id;
    const copyStorage = likeStorage;
    for(const like of copyStorage){
        if (like.id === id ){
            delete copyStorage.id
            setLikes(copyStorage)
            return
        }
    }
    copyStorage[id] = trailSelected
    setLikes(copyStorage)
    return

}
