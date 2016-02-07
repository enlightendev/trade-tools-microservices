package io.enlightendev.watchlists.service;

import io.enlightendev.watchlists.model.Watchlist;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Service
public class WatchlistService {

    private static List<Watchlist> watchLists = new ArrayList<Watchlist>();

    public WatchlistService(){
        watchLists.add(new Watchlist("tech-stocks", "1", "stocks"));
        watchLists.add(new Watchlist("indexes", "1", "futures"));
    }

    public List<Watchlist> getWatchLists(){
        return watchLists;
    }

    public void addWatchlist(Watchlist watchlist){
        watchLists.add(watchlist);
    }

}
