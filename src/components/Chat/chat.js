import { mapGetters, mapActions } from 'vuex'
import { GET_CHANNELS, SET_CHANNELS } from '../../store/mutation-types'
import MessageList from '../messageList'

export default {
    name: 'chat',
    mounted() {
        this.GET_CHANNELS()
        this.GET_MESSAGES(this.$route.params.cname)
    },
    computed: {
        ...mapGetters([
            'messages',
            'channels'
        ])
    },
    methods: {
        ...mapActions([
            // SET_MESSAGES,
            GET_CHANNELS,
            "GET_MESSAGES",
            "POST_MESSAGES",
            SET_CHANNELS,
            "POST_CHANNELS"
        ]),
        add_channel() {
            this.POST_CHANNELS({"cname": this.$route.params.cname}),
            this.channel = " "
        },
        send_message() {
            // this.SET_MESSAGES(this.message)
            this.POST_MESSAGES({"cname": this.$route.params.cname, "message": this.message}),
            this.message = " "
        }
    },
    components: {
        'message-list': MessageList
    },
    data() {
        return {
            message: "",
            channel: ""
        }
    }
}