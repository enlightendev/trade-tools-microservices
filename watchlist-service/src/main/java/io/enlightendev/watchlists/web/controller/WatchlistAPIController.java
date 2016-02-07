package io.enlightendev.watchlists.web.controller;

import io.enlightendev.watchlists.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import io.enlightendev.watchlists.model.Watchlist;

/**
 *
 */
@CrossOrigin(origins={"http://localhost:8080","http://localhost:3000"}, maxAge = 3600)
@RestController
@RequestMapping("/api")
public class WatchlistAPIController {

    @Autowired
    private WatchlistService watchlistService;

    @RequestMapping("/watchlist")
    public List<Watchlist> getWatchLists(){
        return watchlistService.getWatchLists();
    }
}