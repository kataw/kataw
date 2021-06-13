# Kataw parser test case

## Input

`````js
foo?.#bar;

foo?.x?.#bar;

foo?.x?.#bar;

foo?.x?.#bar;

foo?.x?.#bar;

foo?.x?.#bar;

foo?.x?.x?.x?.x?.x?.x?.x?.x?.x?.x?.#bar;

foo?.#x?.#x?.#x?.#x?.#x?.#x?.#bar;

foo?.x?.x?.x?.[y]?.x?.x?.#bar;

foo?.x?.x?.#x?.x?.#x?.x?.[y]?.#x?.x?.x?.#bar;

foo?.x?.x?.#x?.[y]?.[y]?.x?.#bar;

#foo?.x?.x?.x?.x?.x?.x?.#bar;

#foo?.x?.x?.x?.x?.x?.x?.#bar;

#foo?.x?.x?.x?.x?.x?.package=gh?.#bar;

#foo?.x?.x?.x?.x=y?.x?.x?.#bar;

#foo?.x?.x?.x?.[y]=z]?.x?.x?.#bar;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 15,
                        "end": 17
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 10,
                        "end": 15
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 18
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 20,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 24
                },
                "flags": 32,
                "start": 10,
                "end": 24
            },
            "flags": 16,
            "start": 10,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 33,
                    "end": 35
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 30,
                        "end": 32
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 25,
                        "end": 30
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 32,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 33
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 35,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 35,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 39
                },
                "flags": 32,
                "start": 25,
                "end": 39
            },
            "flags": 16,
            "start": 25,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 48,
                    "end": 50
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 45,
                        "end": 47
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 40,
                        "end": 45
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 47,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 47,
                            "end": 48
                        },
                        "flags": 32,
                        "start": 47,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 48
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 50,
                            "end": 54
                        },
                        "flags": 32,
                        "start": 50,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 50,
                    "end": 54
                },
                "flags": 32,
                "start": 40,
                "end": 54
            },
            "flags": 16,
            "start": 40,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 63,
                    "end": 65
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 60,
                        "end": 62
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 55,
                        "end": 60
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 62,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 62,
                            "end": 63
                        },
                        "flags": 32,
                        "start": 62,
                        "end": 63
                    },
                    "flags": 32,
                    "start": 55,
                    "end": 63
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 65,
                            "end": 69
                        },
                        "flags": 32,
                        "start": 65,
                        "end": 69
                    },
                    "flags": 32,
                    "start": 65,
                    "end": 69
                },
                "flags": 32,
                "start": 55,
                "end": 69
            },
            "flags": 16,
            "start": 55,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 78,
                    "end": 80
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 75,
                        "end": 77
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 70,
                        "end": 75
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 77,
                                "end": 78
                            },
                            "flags": 32,
                            "start": 77,
                            "end": 78
                        },
                        "flags": 32,
                        "start": 77,
                        "end": 78
                    },
                    "flags": 32,
                    "start": 70,
                    "end": 78
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 80,
                            "end": 84
                        },
                        "flags": 32,
                        "start": 80,
                        "end": 84
                    },
                    "flags": 32,
                    "start": 80,
                    "end": 84
                },
                "flags": 32,
                "start": 70,
                "end": 84
            },
            "flags": 16,
            "start": 70,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 120,
                    "end": 122
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 117,
                        "end": 119
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 114,
                            "end": 116
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 111,
                                "end": 113
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 108,
                                    "end": 110
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 105,
                                        "end": 107
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 102,
                                            "end": 104
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 99,
                                                "end": 101
                                            },
                                            "member": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "start": 96,
                                                    "end": 98
                                                },
                                                "member": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "start": 93,
                                                        "end": 95
                                                    },
                                                    "member": {
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 64,
                                                            "start": 90,
                                                            "end": 92
                                                        },
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 85,
                                                            "end": 90
                                                        },
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 536871114,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 92,
                                                                    "end": 93
                                                                },
                                                                "flags": 32,
                                                                "start": 92,
                                                                "end": 93
                                                            },
                                                            "flags": 32,
                                                            "start": 92,
                                                            "end": 93
                                                        },
                                                        "flags": 32,
                                                        "start": 85,
                                                        "end": 93
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 536871114,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 95,
                                                                "end": 96
                                                            },
                                                            "flags": 32,
                                                            "start": 95,
                                                            "end": 96
                                                        },
                                                        "flags": 32,
                                                        "start": 95,
                                                        "end": 96
                                                    },
                                                    "flags": 32,
                                                    "start": 85,
                                                    "end": 96
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 536871114,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 98,
                                                            "end": 99
                                                        },
                                                        "flags": 32,
                                                        "start": 98,
                                                        "end": 99
                                                    },
                                                    "flags": 32,
                                                    "start": 98,
                                                    "end": 99
                                                },
                                                "flags": 32,
                                                "start": 85,
                                                "end": 99
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 536871114,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 101,
                                                        "end": 102
                                                    },
                                                    "flags": 32,
                                                    "start": 101,
                                                    "end": 102
                                                },
                                                "flags": 32,
                                                "start": 101,
                                                "end": 102
                                            },
                                            "flags": 32,
                                            "start": 85,
                                            "end": 102
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 104,
                                                    "end": 105
                                                },
                                                "flags": 32,
                                                "start": 104,
                                                "end": 105
                                            },
                                            "flags": 32,
                                            "start": 104,
                                            "end": 105
                                        },
                                        "flags": 32,
                                        "start": 85,
                                        "end": 105
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 107,
                                                "end": 108
                                            },
                                            "flags": 32,
                                            "start": 107,
                                            "end": 108
                                        },
                                        "flags": 32,
                                        "start": 107,
                                        "end": 108
                                    },
                                    "flags": 32,
                                    "start": 85,
                                    "end": 108
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "flags": 32,
                                        "start": 110,
                                        "end": 111
                                    },
                                    "flags": 32,
                                    "start": 110,
                                    "end": 111
                                },
                                "flags": 32,
                                "start": 85,
                                "end": 111
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 113,
                                        "end": 114
                                    },
                                    "flags": 32,
                                    "start": 113,
                                    "end": 114
                                },
                                "flags": 32,
                                "start": 113,
                                "end": 114
                            },
                            "flags": 32,
                            "start": 85,
                            "end": 114
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 116,
                                    "end": 117
                                },
                                "flags": 32,
                                "start": 116,
                                "end": 117
                            },
                            "flags": 32,
                            "start": 116,
                            "end": 117
                        },
                        "flags": 32,
                        "start": 85,
                        "end": 117
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 119,
                                "end": 120
                            },
                            "flags": 32,
                            "start": 119,
                            "end": 120
                        },
                        "flags": 32,
                        "start": 119,
                        "end": 120
                    },
                    "flags": 32,
                    "start": 85,
                    "end": 120
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 122,
                            "end": 126
                        },
                        "flags": 32,
                        "start": 122,
                        "end": 126
                    },
                    "flags": 32,
                    "start": 122,
                    "end": 126
                },
                "flags": 32,
                "start": 85,
                "end": 126
            },
            "flags": 16,
            "start": 85,
            "end": 127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 156,
                    "end": 158
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 152,
                        "end": 154
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 148,
                            "end": 150
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 144,
                                "end": 146
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 140,
                                    "end": 142
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 136,
                                        "end": 138
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 132,
                                            "end": 134
                                        },
                                        "member": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 127,
                                            "end": 132
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 67191035,
                                                    "text": "#x",
                                                    "flags": 96,
                                                    "start": 134,
                                                    "end": 136
                                                },
                                                "flags": 32,
                                                "start": 134,
                                                "end": 136
                                            },
                                            "flags": 32,
                                            "start": 134,
                                            "end": 136
                                        },
                                        "flags": 32,
                                        "start": 127,
                                        "end": 136
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 67191035,
                                                "text": "#x",
                                                "flags": 96,
                                                "start": 138,
                                                "end": 140
                                            },
                                            "flags": 32,
                                            "start": 138,
                                            "end": 140
                                        },
                                        "flags": 32,
                                        "start": 138,
                                        "end": 140
                                    },
                                    "flags": 32,
                                    "start": 127,
                                    "end": 140
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 67191035,
                                            "text": "#x",
                                            "flags": 96,
                                            "start": 142,
                                            "end": 144
                                        },
                                        "flags": 32,
                                        "start": 142,
                                        "end": 144
                                    },
                                    "flags": 32,
                                    "start": 142,
                                    "end": 144
                                },
                                "flags": 32,
                                "start": 127,
                                "end": 144
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 67191035,
                                        "text": "#x",
                                        "flags": 96,
                                        "start": 146,
                                        "end": 148
                                    },
                                    "flags": 32,
                                    "start": 146,
                                    "end": 148
                                },
                                "flags": 32,
                                "start": 146,
                                "end": 148
                            },
                            "flags": 32,
                            "start": 127,
                            "end": 148
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 67191035,
                                    "text": "#x",
                                    "flags": 96,
                                    "start": 150,
                                    "end": 152
                                },
                                "flags": 32,
                                "start": 150,
                                "end": 152
                            },
                            "flags": 32,
                            "start": 150,
                            "end": 152
                        },
                        "flags": 32,
                        "start": 127,
                        "end": 152
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 67191035,
                                "text": "#x",
                                "flags": 96,
                                "start": 154,
                                "end": 156
                            },
                            "flags": 32,
                            "start": 154,
                            "end": 156
                        },
                        "flags": 32,
                        "start": 154,
                        "end": 156
                    },
                    "flags": 32,
                    "start": 127,
                    "end": 156
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 158,
                            "end": 162
                        },
                        "flags": 32,
                        "start": 158,
                        "end": 162
                    },
                    "flags": 32,
                    "start": 158,
                    "end": 162
                },
                "flags": 32,
                "start": 127,
                "end": 162
            },
            "flags": 16,
            "start": 127,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 188,
                    "end": 190
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 185,
                        "end": 187
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 182,
                            "end": 184
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 177,
                                "end": 179
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 174,
                                    "end": 176
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 171,
                                        "end": 173
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 168,
                                            "end": 170
                                        },
                                        "member": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 163,
                                            "end": 168
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 170,
                                                    "end": 171
                                                },
                                                "flags": 32,
                                                "start": 170,
                                                "end": 171
                                            },
                                            "flags": 32,
                                            "start": 170,
                                            "end": 171
                                        },
                                        "flags": 32,
                                        "start": 163,
                                        "end": 171
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 173,
                                                "end": 174
                                            },
                                            "flags": 32,
                                            "start": 173,
                                            "end": 174
                                        },
                                        "flags": 32,
                                        "start": 173,
                                        "end": 174
                                    },
                                    "flags": 32,
                                    "start": 163,
                                    "end": 174
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 176,
                                            "end": 177
                                        },
                                        "flags": 32,
                                        "start": 176,
                                        "end": 177
                                    },
                                    "flags": 32,
                                    "start": 176,
                                    "end": 177
                                },
                                "flags": 32,
                                "start": 163,
                                "end": 177
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 203,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 180,
                                        "end": 181
                                    },
                                    "flags": 536870944,
                                    "start": 179,
                                    "end": 181
                                },
                                "flags": 32,
                                "start": 179,
                                "end": 182
                            },
                            "flags": 32,
                            "start": 163,
                            "end": 182
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 184,
                                    "end": 185
                                },
                                "flags": 32,
                                "start": 184,
                                "end": 185
                            },
                            "flags": 32,
                            "start": 184,
                            "end": 185
                        },
                        "flags": 32,
                        "start": 163,
                        "end": 185
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 187,
                                "end": 188
                            },
                            "flags": 32,
                            "start": 187,
                            "end": 188
                        },
                        "flags": 32,
                        "start": 187,
                        "end": 188
                    },
                    "flags": 32,
                    "start": 163,
                    "end": 188
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 190,
                            "end": 194
                        },
                        "flags": 32,
                        "start": 190,
                        "end": 194
                    },
                    "flags": 32,
                    "start": 190,
                    "end": 194
                },
                "flags": 32,
                "start": 163,
                "end": 194
            },
            "flags": 16,
            "start": 163,
            "end": 195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 235,
                    "end": 237
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 232,
                        "end": 234
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 229,
                            "end": 231
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 225,
                                "end": 227
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 220,
                                    "end": 222
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 217,
                                        "end": 219
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 213,
                                            "end": 215
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 210,
                                                "end": 212
                                            },
                                            "member": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "start": 206,
                                                    "end": 208
                                                },
                                                "member": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "start": 203,
                                                        "end": 205
                                                    },
                                                    "member": {
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 64,
                                                            "start": 200,
                                                            "end": 202
                                                        },
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 195,
                                                            "end": 200
                                                        },
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 536871114,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 202,
                                                                    "end": 203
                                                                },
                                                                "flags": 32,
                                                                "start": 202,
                                                                "end": 203
                                                            },
                                                            "flags": 32,
                                                            "start": 202,
                                                            "end": 203
                                                        },
                                                        "flags": 32,
                                                        "start": 195,
                                                        "end": 203
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 536871114,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 205,
                                                                "end": 206
                                                            },
                                                            "flags": 32,
                                                            "start": 205,
                                                            "end": 206
                                                        },
                                                        "flags": 32,
                                                        "start": 205,
                                                        "end": 206
                                                    },
                                                    "flags": 32,
                                                    "start": 195,
                                                    "end": 206
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 536871114,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "flags": 96,
                                                            "start": 208,
                                                            "end": 210
                                                        },
                                                        "flags": 32,
                                                        "start": 208,
                                                        "end": 210
                                                    },
                                                    "flags": 32,
                                                    "start": 208,
                                                    "end": 210
                                                },
                                                "flags": 32,
                                                "start": 195,
                                                "end": 210
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 536871114,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 212,
                                                        "end": 213
                                                    },
                                                    "flags": 32,
                                                    "start": 212,
                                                    "end": 213
                                                },
                                                "flags": 32,
                                                "start": 212,
                                                "end": 213
                                            },
                                            "flags": 32,
                                            "start": 195,
                                            "end": 213
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 67191035,
                                                    "text": "#x",
                                                    "flags": 96,
                                                    "start": 215,
                                                    "end": 217
                                                },
                                                "flags": 32,
                                                "start": 215,
                                                "end": 217
                                            },
                                            "flags": 32,
                                            "start": 215,
                                            "end": 217
                                        },
                                        "flags": 32,
                                        "start": 195,
                                        "end": 217
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 219,
                                                "end": 220
                                            },
                                            "flags": 32,
                                            "start": 219,
                                            "end": 220
                                        },
                                        "flags": 32,
                                        "start": 219,
                                        "end": 220
                                    },
                                    "flags": 32,
                                    "start": 195,
                                    "end": 220
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 223,
                                            "end": 224
                                        },
                                        "flags": 536870944,
                                        "start": 222,
                                        "end": 224
                                    },
                                    "flags": 32,
                                    "start": 222,
                                    "end": 225
                                },
                                "flags": 32,
                                "start": 195,
                                "end": 225
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 67191035,
                                        "text": "#x",
                                        "flags": 96,
                                        "start": 227,
                                        "end": 229
                                    },
                                    "flags": 32,
                                    "start": 227,
                                    "end": 229
                                },
                                "flags": 32,
                                "start": 227,
                                "end": 229
                            },
                            "flags": 32,
                            "start": 195,
                            "end": 229
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 231,
                                    "end": 232
                                },
                                "flags": 32,
                                "start": 231,
                                "end": 232
                            },
                            "flags": 32,
                            "start": 231,
                            "end": 232
                        },
                        "flags": 32,
                        "start": 195,
                        "end": 232
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 234,
                                "end": 235
                            },
                            "flags": 32,
                            "start": 234,
                            "end": 235
                        },
                        "flags": 32,
                        "start": 234,
                        "end": 235
                    },
                    "flags": 32,
                    "start": 195,
                    "end": 235
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 237,
                            "end": 241
                        },
                        "flags": 32,
                        "start": 237,
                        "end": 241
                    },
                    "flags": 32,
                    "start": 237,
                    "end": 241
                },
                "flags": 32,
                "start": 195,
                "end": 241
            },
            "flags": 16,
            "start": 195,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 270,
                    "end": 272
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 267,
                        "end": 269
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 262,
                            "end": 264
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 257,
                                "end": 259
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 253,
                                    "end": 255
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 250,
                                        "end": 252
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 247,
                                            "end": 249
                                        },
                                        "member": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 242,
                                            "end": 247
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 249,
                                                    "end": 250
                                                },
                                                "flags": 32,
                                                "start": 249,
                                                "end": 250
                                            },
                                            "flags": 32,
                                            "start": 249,
                                            "end": 250
                                        },
                                        "flags": 32,
                                        "start": 242,
                                        "end": 250
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 252,
                                                "end": 253
                                            },
                                            "flags": 32,
                                            "start": 252,
                                            "end": 253
                                        },
                                        "flags": 32,
                                        "start": 252,
                                        "end": 253
                                    },
                                    "flags": 32,
                                    "start": 242,
                                    "end": 253
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 67191035,
                                            "text": "#x",
                                            "flags": 96,
                                            "start": 255,
                                            "end": 257
                                        },
                                        "flags": 32,
                                        "start": 255,
                                        "end": 257
                                    },
                                    "flags": 32,
                                    "start": 255,
                                    "end": 257
                                },
                                "flags": 32,
                                "start": 242,
                                "end": 257
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 203,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 260,
                                        "end": 261
                                    },
                                    "flags": 536870944,
                                    "start": 259,
                                    "end": 261
                                },
                                "flags": 32,
                                "start": 259,
                                "end": 262
                            },
                            "flags": 32,
                            "start": 242,
                            "end": 262
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 203,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 265,
                                    "end": 266
                                },
                                "flags": 536870944,
                                "start": 264,
                                "end": 266
                            },
                            "flags": 32,
                            "start": 264,
                            "end": 267
                        },
                        "flags": 32,
                        "start": 242,
                        "end": 267
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 269,
                                "end": 270
                            },
                            "flags": 32,
                            "start": 269,
                            "end": 270
                        },
                        "flags": 32,
                        "start": 269,
                        "end": 270
                    },
                    "flags": 32,
                    "start": 242,
                    "end": 270
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 272,
                            "end": 276
                        },
                        "flags": 32,
                        "start": 272,
                        "end": 276
                    },
                    "flags": 32,
                    "start": 272,
                    "end": 276
                },
                "flags": 32,
                "start": 242,
                "end": 276
            },
            "flags": 16,
            "start": 242,
            "end": 277
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 301,
                    "end": 303
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 298,
                        "end": 300
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 295,
                            "end": 297
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 292,
                                "end": 294
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 289,
                                    "end": 291
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 286,
                                        "end": 288
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 283,
                                            "end": 285
                                        },
                                        "member": {
                                            "kind": 67191035,
                                            "text": "#foo",
                                            "flags": 96,
                                            "start": 277,
                                            "end": 283
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 285,
                                                    "end": 286
                                                },
                                                "flags": 32,
                                                "start": 285,
                                                "end": 286
                                            },
                                            "flags": 32,
                                            "start": 285,
                                            "end": 286
                                        },
                                        "flags": 32,
                                        "start": 277,
                                        "end": 286
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 288,
                                                "end": 289
                                            },
                                            "flags": 32,
                                            "start": 288,
                                            "end": 289
                                        },
                                        "flags": 32,
                                        "start": 288,
                                        "end": 289
                                    },
                                    "flags": 32,
                                    "start": 277,
                                    "end": 289
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 291,
                                            "end": 292
                                        },
                                        "flags": 32,
                                        "start": 291,
                                        "end": 292
                                    },
                                    "flags": 32,
                                    "start": 291,
                                    "end": 292
                                },
                                "flags": 32,
                                "start": 277,
                                "end": 292
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 294,
                                        "end": 295
                                    },
                                    "flags": 32,
                                    "start": 294,
                                    "end": 295
                                },
                                "flags": 32,
                                "start": 294,
                                "end": 295
                            },
                            "flags": 32,
                            "start": 277,
                            "end": 295
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 297,
                                    "end": 298
                                },
                                "flags": 32,
                                "start": 297,
                                "end": 298
                            },
                            "flags": 32,
                            "start": 297,
                            "end": 298
                        },
                        "flags": 32,
                        "start": 277,
                        "end": 298
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 300,
                                "end": 301
                            },
                            "flags": 32,
                            "start": 300,
                            "end": 301
                        },
                        "flags": 32,
                        "start": 300,
                        "end": 301
                    },
                    "flags": 32,
                    "start": 277,
                    "end": 301
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 303,
                            "end": 307
                        },
                        "flags": 32,
                        "start": 303,
                        "end": 307
                    },
                    "flags": 32,
                    "start": 303,
                    "end": 307
                },
                "flags": 32,
                "start": 277,
                "end": 307
            },
            "flags": 16,
            "start": 277,
            "end": 308
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 332,
                    "end": 334
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 329,
                        "end": 331
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 326,
                            "end": 328
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 323,
                                "end": 325
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 320,
                                    "end": 322
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 317,
                                        "end": 319
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 314,
                                            "end": 316
                                        },
                                        "member": {
                                            "kind": 67191035,
                                            "text": "#foo",
                                            "flags": 96,
                                            "start": 308,
                                            "end": 314
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 316,
                                                    "end": 317
                                                },
                                                "flags": 32,
                                                "start": 316,
                                                "end": 317
                                            },
                                            "flags": 32,
                                            "start": 316,
                                            "end": 317
                                        },
                                        "flags": 32,
                                        "start": 308,
                                        "end": 317
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 319,
                                                "end": 320
                                            },
                                            "flags": 32,
                                            "start": 319,
                                            "end": 320
                                        },
                                        "flags": 32,
                                        "start": 319,
                                        "end": 320
                                    },
                                    "flags": 32,
                                    "start": 308,
                                    "end": 320
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 322,
                                            "end": 323
                                        },
                                        "flags": 32,
                                        "start": 322,
                                        "end": 323
                                    },
                                    "flags": 32,
                                    "start": 322,
                                    "end": 323
                                },
                                "flags": 32,
                                "start": 308,
                                "end": 323
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 325,
                                        "end": 326
                                    },
                                    "flags": 32,
                                    "start": 325,
                                    "end": 326
                                },
                                "flags": 32,
                                "start": 325,
                                "end": 326
                            },
                            "flags": 32,
                            "start": 308,
                            "end": 326
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 328,
                                    "end": 329
                                },
                                "flags": 32,
                                "start": 328,
                                "end": 329
                            },
                            "flags": 32,
                            "start": 328,
                            "end": 329
                        },
                        "flags": 32,
                        "start": 308,
                        "end": 329
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 331,
                                "end": 332
                            },
                            "flags": 32,
                            "start": 331,
                            "end": 332
                        },
                        "flags": 32,
                        "start": 331,
                        "end": 332
                    },
                    "flags": 32,
                    "start": 308,
                    "end": 332
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 334,
                            "end": 338
                        },
                        "flags": 32,
                        "start": 334,
                        "end": 338
                    },
                    "flags": 32,
                    "start": 334,
                    "end": 338
                },
                "flags": 32,
                "start": 308,
                "end": 338
            },
            "flags": 16,
            "start": 308,
            "end": 339
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 360,
                        "end": 362
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 357,
                            "end": 359
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 354,
                                "end": 356
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 351,
                                    "end": 353
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 348,
                                        "end": 350
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 345,
                                            "end": 347
                                        },
                                        "member": {
                                            "kind": 67191035,
                                            "text": "#foo",
                                            "flags": 96,
                                            "start": 339,
                                            "end": 345
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 536871114,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 347,
                                                    "end": 348
                                                },
                                                "flags": 32,
                                                "start": 347,
                                                "end": 348
                                            },
                                            "flags": 32,
                                            "start": 347,
                                            "end": 348
                                        },
                                        "flags": 32,
                                        "start": 339,
                                        "end": 348
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 536871114,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 350,
                                                "end": 351
                                            },
                                            "flags": 32,
                                            "start": 350,
                                            "end": 351
                                        },
                                        "flags": 32,
                                        "start": 350,
                                        "end": 351
                                    },
                                    "flags": 32,
                                    "start": 339,
                                    "end": 351
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 353,
                                            "end": 354
                                        },
                                        "flags": 32,
                                        "start": 353,
                                        "end": 354
                                    },
                                    "flags": 32,
                                    "start": 353,
                                    "end": 354
                                },
                                "flags": 32,
                                "start": 339,
                                "end": 354
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 356,
                                        "end": 357
                                    },
                                    "flags": 32,
                                    "start": 356,
                                    "end": 357
                                },
                                "flags": 32,
                                "start": 356,
                                "end": 357
                            },
                            "flags": 32,
                            "start": 339,
                            "end": 357
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 359,
                                    "end": 360
                                },
                                "flags": 32,
                                "start": 359,
                                "end": 360
                            },
                            "flags": 32,
                            "start": 359,
                            "end": 360
                        },
                        "flags": 32,
                        "start": 339,
                        "end": 360
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "package",
                                "rawText": "package",
                                "flags": 96,
                                "start": 362,
                                "end": 369
                            },
                            "flags": 32,
                            "start": 362,
                            "end": 369
                        },
                        "flags": 32,
                        "start": 362,
                        "end": 369
                    },
                    "flags": 32,
                    "start": 339,
                    "end": 369
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 369,
                    "end": 370
                },
                "right": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 372,
                        "end": 374
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "gh",
                        "rawText": "gh",
                        "flags": 96,
                        "start": 370,
                        "end": 372
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 67191035,
                                "text": "#bar",
                                "flags": 96,
                                "start": 374,
                                "end": 378
                            },
                            "flags": 32,
                            "start": 374,
                            "end": 378
                        },
                        "flags": 32,
                        "start": 374,
                        "end": 378
                    },
                    "flags": 32,
                    "start": 370,
                    "end": 378
                },
                "flags": 32,
                "start": 339,
                "end": 378
            },
            "flags": 16,
            "start": 339,
            "end": 379
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 394,
                        "end": 396
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 391,
                            "end": 393
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 388,
                                "end": 390
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 385,
                                    "end": 387
                                },
                                "member": {
                                    "kind": 67191035,
                                    "text": "#foo",
                                    "flags": 96,
                                    "start": 379,
                                    "end": 385
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 387,
                                            "end": 388
                                        },
                                        "flags": 32,
                                        "start": 387,
                                        "end": 388
                                    },
                                    "flags": 32,
                                    "start": 387,
                                    "end": 388
                                },
                                "flags": 32,
                                "start": 379,
                                "end": 388
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 390,
                                        "end": 391
                                    },
                                    "flags": 32,
                                    "start": 390,
                                    "end": 391
                                },
                                "flags": 32,
                                "start": 390,
                                "end": 391
                            },
                            "flags": 32,
                            "start": 379,
                            "end": 391
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 393,
                                    "end": 394
                                },
                                "flags": 32,
                                "start": 393,
                                "end": 394
                            },
                            "flags": 32,
                            "start": 393,
                            "end": 394
                        },
                        "flags": 32,
                        "start": 379,
                        "end": 394
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 396,
                                "end": 397
                            },
                            "flags": 32,
                            "start": 396,
                            "end": 397
                        },
                        "flags": 32,
                        "start": 396,
                        "end": 397
                    },
                    "flags": 32,
                    "start": 379,
                    "end": 397
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 397,
                    "end": 398
                },
                "right": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 405,
                        "end": 407
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 402,
                            "end": 404
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 399,
                                "end": 401
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 398,
                                "end": 399
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 401,
                                        "end": 402
                                    },
                                    "flags": 32,
                                    "start": 401,
                                    "end": 402
                                },
                                "flags": 32,
                                "start": 401,
                                "end": 402
                            },
                            "flags": 32,
                            "start": 398,
                            "end": 402
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 404,
                                    "end": 405
                                },
                                "flags": 32,
                                "start": 404,
                                "end": 405
                            },
                            "flags": 32,
                            "start": 404,
                            "end": 405
                        },
                        "flags": 32,
                        "start": 398,
                        "end": 405
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 67191035,
                                "text": "#bar",
                                "flags": 96,
                                "start": 407,
                                "end": 411
                            },
                            "flags": 32,
                            "start": 407,
                            "end": 411
                        },
                        "flags": 32,
                        "start": 407,
                        "end": 411
                    },
                    "flags": 32,
                    "start": 398,
                    "end": 411
                },
                "flags": 32,
                "start": 379,
                "end": 411
            },
            "flags": 16,
            "start": 379,
            "end": 412
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 427,
                        "end": 429
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 424,
                            "end": 426
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 421,
                                "end": 423
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 418,
                                    "end": 420
                                },
                                "member": {
                                    "kind": 67191035,
                                    "text": "#foo",
                                    "flags": 96,
                                    "start": 412,
                                    "end": 418
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 536871114,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 420,
                                            "end": 421
                                        },
                                        "flags": 32,
                                        "start": 420,
                                        "end": 421
                                    },
                                    "flags": 32,
                                    "start": 420,
                                    "end": 421
                                },
                                "flags": 32,
                                "start": 412,
                                "end": 421
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 423,
                                        "end": 424
                                    },
                                    "flags": 32,
                                    "start": 423,
                                    "end": 424
                                },
                                "flags": 32,
                                "start": 423,
                                "end": 424
                            },
                            "flags": 32,
                            "start": 412,
                            "end": 424
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 426,
                                    "end": 427
                                },
                                "flags": 32,
                                "start": 426,
                                "end": 427
                            },
                            "flags": 32,
                            "start": 426,
                            "end": 427
                        },
                        "flags": 32,
                        "start": 412,
                        "end": 427
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 430,
                                "end": 431
                            },
                            "flags": 536870944,
                            "start": 429,
                            "end": 431
                        },
                        "flags": 32,
                        "start": 429,
                        "end": 432
                    },
                    "flags": 32,
                    "start": 412,
                    "end": 432
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 432,
                    "end": 433
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 433,
                    "end": 434
                },
                "flags": 32,
                "start": 412,
                "end": 434
            },
            "flags": 16,
            "start": 412,
            "end": 434
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 441,
                    "end": 443
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 438,
                        "end": 440
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 437,
                        "end": 438
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 440,
                                "end": 441
                            },
                            "flags": 32,
                            "start": 440,
                            "end": 441
                        },
                        "flags": 32,
                        "start": 440,
                        "end": 441
                    },
                    "flags": 32,
                    "start": 437,
                    "end": 441
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67191035,
                            "text": "#bar",
                            "flags": 96,
                            "start": 443,
                            "end": 447
                        },
                        "flags": 32,
                        "start": 443,
                        "end": 447
                    },
                    "flags": 32,
                    "start": 443,
                    "end": 447
                },
                "flags": 32,
                "start": 437,
                "end": 447
            },
            "flags": 16,
            "start": 437,
            "end": 448
        }
    ],
    "isModule": false,
    "source": "foo?.#bar;\n\nfoo?.x?.#bar;\n\nfoo?.x?.#bar;\n\nfoo?.x?.#bar;\n\nfoo?.x?.#bar;\n\nfoo?.x?.#bar;\n\nfoo?.x?.x?.x?.x?.x?.x?.x?.x?.x?.x?.#bar;\n\nfoo?.#x?.#x?.#x?.#x?.#x?.#x?.#bar;\n\nfoo?.x?.x?.x?.[y]?.x?.x?.#bar;\n\nfoo?.x?.x?.#x?.x?.#x?.x?.[y]?.#x?.x?.x?.#bar;\n\nfoo?.x?.x?.#x?.[y]?.[y]?.x?.#bar;\n\n#foo?.x?.x?.x?.x?.x?.x?.#bar;\n\n#foo?.x?.x?.x?.x?.x?.x?.#bar;\n\n#foo?.x?.x?.x?.x?.x?.package=gh?.#bar;\n\n#foo?.x?.x?.x?.x=y?.x?.x?.#bar;\n\n#foo?.x?.x?.x?.[y]=z]?.x?.x?.#bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 448
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 5, end: 9
✖ Private identifiers are not allowed outside class bodies - start: 20, end: 24
✖ Private identifiers are not allowed outside class bodies - start: 35, end: 39
✖ Private identifiers are not allowed outside class bodies - start: 50, end: 54
✖ Private identifiers are not allowed outside class bodies - start: 65, end: 69
✖ Private identifiers are not allowed outside class bodies - start: 80, end: 84
✖ Private identifiers are not allowed outside class bodies - start: 122, end: 126
✖ Private identifiers are not allowed outside class bodies - start: 134, end: 136
✖ Private identifiers are not allowed outside class bodies - start: 138, end: 140
✖ Private identifiers are not allowed outside class bodies - start: 142, end: 144
✖ Private identifiers are not allowed outside class bodies - start: 146, end: 148
✖ Private identifiers are not allowed outside class bodies - start: 150, end: 152
✖ Private identifiers are not allowed outside class bodies - start: 154, end: 156
✖ Private identifiers are not allowed outside class bodies - start: 158, end: 162
✖ Private identifiers are not allowed outside class bodies - start: 190, end: 194
✖ Private identifiers are not allowed outside class bodies - start: 208, end: 210
✖ Private identifiers are not allowed outside class bodies - start: 215, end: 217
✖ Private identifiers are not allowed outside class bodies - start: 227, end: 229
✖ Private identifiers are not allowed outside class bodies - start: 237, end: 241
✖ Private identifiers are not allowed outside class bodies - start: 255, end: 257
✖ Private identifiers are not allowed outside class bodies - start: 272, end: 276
✖ Private identifiers are not allowed outside class bodies - start: 277, end: 283
✖ Private identifiers are not allowed outside class bodies - start: 303, end: 307
✖ Private identifiers are not allowed outside class bodies - start: 308, end: 314
✖ Private identifiers are not allowed outside class bodies - start: 334, end: 338
✖ Private identifiers are not allowed outside class bodies - start: 339, end: 345
✖ The left-hand side of an assignment expression may not be an optional property access - start: 362, end: 370
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 369, end: 370
✖ Private identifiers are not allowed outside class bodies - start: 374, end: 378
✖ Private identifiers are not allowed outside class bodies - start: 379, end: 385
✖ The left-hand side of an assignment expression may not be an optional property access - start: 396, end: 398
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 397, end: 398
✖ Private identifiers are not allowed outside class bodies - start: 407, end: 411
✖ Private identifiers are not allowed outside class bodies - start: 412, end: 418
✖ The left-hand side of an assignment expression may not be an optional property access - start: 429, end: 433
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 432, end: 433
✖ Expected a `;` - start: 434, end: 435
✖ Declaration or statement expected - start: 435, end: 437
✖ Private identifiers are not allowed outside class bodies - start: 443, end: 447

```

