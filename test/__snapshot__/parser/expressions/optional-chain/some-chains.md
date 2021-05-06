# Kataw parser test case

## Input

`````js
a?.b.x.x.x.x.x;

a?.b?.x?.x?.x.x.x;

z.z.a?.b?.x?.x?.x.x.x;

z.z?.(a)?.b?.x?.x?.x.x.x;

(a?.b.x.x).x.x.x;

(a?.b?.x)?.x?.x.x.x;

(z.z.a)?.b?.x?.x?.x.x.x;

(z.z?.(a)?.b)?.x?.x?.x.x.x;
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
                "kind": 129,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 3
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 0,
                                    "end": 1
                                },
                                "chain": {
                                    "kind": 202,
                                    "chain": {
                                        "kind": 206,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 6
                                },
                                "flags": 32,
                                "start": 0,
                                "end": 6
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 24,
                            "end": 26
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 18,
                                    "end": 20
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 18
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "flags": 32,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 21
                            },
                            "chain": {
                                "kind": 206,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 24
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 27
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 27
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 29,
                            "end": 30
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 31,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 32
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 33,
                    "end": 34
                },
                "flags": 32,
                "start": 15,
                "end": 34
            },
            "flags": 16,
            "start": 15,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 51,
                        "end": 53
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 48,
                            "end": 50
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 42,
                                    "end": 44
                                },
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 40
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 41,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 42
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "start": 44,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 45
                            },
                            "chain": {
                                "kind": 206,
                                "chain": {
                                    "kind": 202,
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
                            "start": 35,
                            "end": 48
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 50,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 50,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 50,
                            "end": 51
                        },
                        "flags": 32,
                        "start": 35,
                        "end": 51
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 53,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 53,
                                "end": 54
                            },
                            "flags": 32,
                            "start": 53,
                            "end": 54
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 55,
                            "end": 56
                        },
                        "flags": 32,
                        "start": 54,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 56
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 57,
                    "end": 58
                },
                "flags": 32,
                "start": 35,
                "end": 58
            },
            "flags": 16,
            "start": 35,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 78,
                        "end": 80
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 75,
                            "end": 77
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 0,
                                "start": 72,
                                "end": 74
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 69,
                                    "end": 71
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 0,
                                        "start": 64,
                                        "end": 66
                                    },
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 59,
                                            "end": 62
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "flags": 32,
                                        "start": 59,
                                        "end": 64
                                    },
                                    "chain": {
                                        "kind": 206,
                                        "chain": {
                                            "kind": 204,
                                            "chain": null,
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 67,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 67,
                                                "end": 68
                                            },
                                            "flags": 32,
                                            "start": 66,
                                            "end": 69
                                        },
                                        "flags": 32,
                                        "start": 66,
                                        "end": 69
                                    },
                                    "flags": 32,
                                    "start": 59,
                                    "end": 69
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 71,
                                            "end": 72
                                        },
                                        "flags": 32,
                                        "start": 71,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "start": 71,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 59,
                                "end": 72
                            },
                            "chain": {
                                "kind": 206,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 74,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "start": 74,
                                    "end": 75
                                },
                                "flags": 32,
                                "start": 74,
                                "end": 75
                            },
                            "flags": 32,
                            "start": 59,
                            "end": 75
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
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
                        "start": 59,
                        "end": 78
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 80,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 80,
                                "end": 81
                            },
                            "flags": 32,
                            "start": 80,
                            "end": 81
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 82,
                            "end": 83
                        },
                        "flags": 32,
                        "start": 81,
                        "end": 83
                    },
                    "flags": 32,
                    "start": 59,
                    "end": 83
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 84,
                    "end": 85
                },
                "flags": 32,
                "start": 59,
                "end": 85
            },
            "flags": 16,
            "start": 59,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 0,
                                        "start": 90,
                                        "end": 92
                                    },
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 89,
                                        "end": 90
                                    },
                                    "chain": {
                                        "kind": 202,
                                        "chain": {
                                            "kind": 206,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
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
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 94,
                                            "end": 95
                                        },
                                        "flags": 32,
                                        "start": 93,
                                        "end": 95
                                    },
                                    "flags": 32,
                                    "start": 86,
                                    "end": 95
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 96,
                                    "end": 97
                                },
                                "flags": 32,
                                "start": 86,
                                "end": 97
                            },
                            "flags": 32,
                            "start": 86,
                            "end": 98
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 99,
                            "end": 100
                        },
                        "flags": 32,
                        "start": 86,
                        "end": 100
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 101,
                        "end": 102
                    },
                    "flags": 32,
                    "start": 86,
                    "end": 102
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 103,
                    "end": 104
                },
                "flags": 32,
                "start": 86,
                "end": 104
            },
            "flags": 16,
            "start": 86,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 119,
                        "end": 121
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 116,
                            "end": 118
                        },
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 112,
                                    "end": 114
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 0,
                                        "start": 109,
                                        "end": 111
                                    },
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 108,
                                        "end": 109
                                    },
                                    "chain": {
                                        "kind": 206,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 111,
                                                "end": 112
                                            },
                                            "flags": 32,
                                            "start": 111,
                                            "end": 112
                                        },
                                        "flags": 32,
                                        "start": 111,
                                        "end": 112
                                    },
                                    "flags": 32,
                                    "start": 105,
                                    "end": 112
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 114,
                                            "end": 115
                                        },
                                        "flags": 32,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "flags": 32,
                                    "start": 114,
                                    "end": 115
                                },
                                "flags": 32,
                                "start": 105,
                                "end": 115
                            },
                            "flags": 32,
                            "start": 105,
                            "end": 116
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 118,
                                    "end": 119
                                },
                                "flags": 32,
                                "start": 118,
                                "end": 119
                            },
                            "flags": 32,
                            "start": 118,
                            "end": 119
                        },
                        "flags": 32,
                        "start": 105,
                        "end": 119
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 121,
                                    "end": 122
                                },
                                "flags": 32,
                                "start": 121,
                                "end": 122
                            },
                            "flags": 32,
                            "start": 121,
                            "end": 122
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 123,
                            "end": 124
                        },
                        "flags": 32,
                        "start": 122,
                        "end": 124
                    },
                    "flags": 32,
                    "start": 105,
                    "end": 124
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 125,
                    "end": 126
                },
                "flags": 32,
                "start": 105,
                "end": 126
            },
            "flags": 16,
            "start": 105,
            "end": 127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 145,
                        "end": 147
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 142,
                            "end": 144
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 0,
                                "start": 139,
                                "end": 141
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 136,
                                    "end": 138
                                },
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 130,
                                                "end": 131
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 132,
                                                "end": 133
                                            },
                                            "flags": 32,
                                            "start": 127,
                                            "end": 133
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 134,
                                            "end": 135
                                        },
                                        "flags": 32,
                                        "start": 127,
                                        "end": 135
                                    },
                                    "flags": 32,
                                    "start": 127,
                                    "end": 136
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 138,
                                            "end": 139
                                        },
                                        "flags": 32,
                                        "start": 138,
                                        "end": 139
                                    },
                                    "flags": 32,
                                    "start": 138,
                                    "end": 139
                                },
                                "flags": 32,
                                "start": 127,
                                "end": 139
                            },
                            "chain": {
                                "kind": 206,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 141,
                                        "end": 142
                                    },
                                    "flags": 32,
                                    "start": 141,
                                    "end": 142
                                },
                                "flags": 32,
                                "start": 141,
                                "end": 142
                            },
                            "flags": 32,
                            "start": 127,
                            "end": 142
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 144,
                                    "end": 145
                                },
                                "flags": 32,
                                "start": 144,
                                "end": 145
                            },
                            "flags": 32,
                            "start": 144,
                            "end": 145
                        },
                        "flags": 32,
                        "start": 127,
                        "end": 145
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 147,
                                    "end": 148
                                },
                                "flags": 32,
                                "start": 147,
                                "end": 148
                            },
                            "flags": 32,
                            "start": 147,
                            "end": 148
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 149,
                            "end": 150
                        },
                        "flags": 32,
                        "start": 148,
                        "end": 150
                    },
                    "flags": 32,
                    "start": 127,
                    "end": 150
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 151,
                    "end": 152
                },
                "flags": 32,
                "start": 127,
                "end": 152
            },
            "flags": 16,
            "start": 127,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 174,
                        "end": 176
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 171,
                            "end": 173
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 0,
                                "start": 168,
                                "end": 170
                            },
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 0,
                                        "start": 164,
                                        "end": 166
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 0,
                                            "start": 159,
                                            "end": 161
                                        },
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 156,
                                                "end": 157
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 158,
                                                "end": 159
                                            },
                                            "flags": 32,
                                            "start": 153,
                                            "end": 159
                                        },
                                        "chain": {
                                            "kind": 206,
                                            "chain": {
                                                "kind": 204,
                                                "chain": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 162,
                                                            "end": 163
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 162,
                                                    "end": 163
                                                },
                                                "flags": 32,
                                                "start": 161,
                                                "end": 164
                                            },
                                            "flags": 32,
                                            "start": 161,
                                            "end": 164
                                        },
                                        "flags": 32,
                                        "start": 153,
                                        "end": 164
                                    },
                                    "chain": {
                                        "kind": 206,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 166,
                                                "end": 167
                                            },
                                            "flags": 32,
                                            "start": 166,
                                            "end": 167
                                        },
                                        "flags": 32,
                                        "start": 166,
                                        "end": 167
                                    },
                                    "flags": 32,
                                    "start": 153,
                                    "end": 167
                                },
                                "flags": 32,
                                "start": 153,
                                "end": 168
                            },
                            "chain": {
                                "kind": 206,
                                "chain": {
                                    "kind": 202,
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
                            "start": 153,
                            "end": 171
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
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
                        "start": 153,
                        "end": 174
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
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
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 178,
                            "end": 179
                        },
                        "flags": 32,
                        "start": 177,
                        "end": 179
                    },
                    "flags": 32,
                    "start": 153,
                    "end": 179
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 180,
                    "end": 181
                },
                "flags": 32,
                "start": 153,
                "end": 181
            },
            "flags": 16,
            "start": 153,
            "end": 182
        }
    ],
    "isModule": false,
    "source": "a?.b.x.x.x.x.x;\n\na?.b?.x?.x?.x.x.x;\n\nz.z.a?.b?.x?.x?.x.x.x;\n\nz.z?.(a)?.b?.x?.x?.x.x.x;\n\n(a?.b.x.x).x.x.x;\n\n(a?.b?.x)?.x?.x.x.x;\n\n(z.z.a)?.b?.x?.x?.x.x.x;\n\n(z.z?.(a)?.b)?.x?.x?.x.x.x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 182
}
```

### Printed

```javascript

 = .x.x.x.x;
 = .x;
 = .x;
 = .x;
( = .x).x.x.x;
 = .x;
 = .x;
 = .x;
```

### Diagnostics

```javascript
✔ No errors
```

