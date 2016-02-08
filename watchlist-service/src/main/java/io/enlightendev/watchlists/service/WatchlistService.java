package io.enlightendev.watchlists.service;

import io.enlightendev.watchlists.model.Watchlist;
import io.enlightendev.watchlists.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Service
public class WatchlistService {

    @Autowired
    WatchlistRepository watchlistRepository;

    public WatchlistService(){
    }

    public List<Watchlist> getWatchLists(){
        return watchlistRepository.findAll();
    }

    public void addWatchlist(Watchlist watchlist){
        watchlistRepository.save(watchlist);
    }

}
