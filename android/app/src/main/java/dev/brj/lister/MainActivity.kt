package dev.brj.lister

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.mediarouter.app.MediaRouteButton
import com.google.android.gms.cast.framework.CastButtonFactory
import com.google.android.gms.cast.framework.CastContext
import java.util.concurrent.Executors

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val executor = Executors.newSingleThreadExecutor()

        val mMediaRouteButton = findViewById<View>(R.id.media_route_button) as MediaRouteButton
        CastButtonFactory.setUpMediaRouteButton(applicationContext, mMediaRouteButton)

        CastContext.getSharedInstance(this, executor);
    }
}