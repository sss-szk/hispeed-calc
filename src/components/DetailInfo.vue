<template>
    <div>
        <p>ノーツ表示時間:{{ this.blue }}s ノーツ表示範囲:{{ this.length }}cm</p>
    </div>
</template>

<script>
import { ref, watch ,onMounted } from 'vue';
export default {
props: {
    green: {
        type: Number,
        required: true,
    },
    white: {
        type: Number,
        required: true,
    }
},
setup(props) {
    // refを使用してローカルなリアクティブな変数 localBpm を定義し、props.bpm の初期値で初期化
    const blue = ref(0);
    const length = ref(0)

    // props.bpm の変更を検知して、localBpm.value を新しい値で更新
    watch(() => props.green, (newGreen) => {
        blue.value = calcBlue(newGreen);
    })
    watch(() => props.white, (newWhite) => {
        length.value = calcLength(newWhite);
    });

    // onMountedフックで初期化
    onMounted(() => {
        length.value = calcLength(props.white);
        blue.value = calcBlue(props.green);
    });

    function calcBlue(green) {
        var blue =  parseFloat(green) * 0.01666 / 10;
        return parseFloat(blue.toFixed(3));
    }

    function calcLength(white) {
        var len = parseFloat(white) * 0.35 /10;
        return parseFloat(len.toFixed(2));
    }

    // setup関数から返すオブジェクト。これにより、コンポーネント内で使用できる変数や関数を提供
    return {
        blue,length
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
