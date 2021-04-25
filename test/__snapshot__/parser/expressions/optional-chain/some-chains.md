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

### Hybrid CST

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
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "flags": 256,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 6
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 6
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 9,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 11,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 205,
                            "member": {
                                "kind": 205,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "flags": 256,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "flags": 256,
                                    "start": 20,
                                    "end": 21
                                },
                                "flags": 256,
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
                                        "flags": 768,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 23,
                                    "end": 24
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 24
                            },
                            "flags": 256,
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
                                    "flags": 768,
                                    "start": 26,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 256,
                            "start": 26,
                            "end": 27
                        },
                        "flags": 256,
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
                                    "flags": 768,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 30
                            },
                            "flags": 256,
                            "start": 29,
                            "end": 30
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 31,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 32
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 33,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 34
            },
            "flags": 128,
            "start": 15,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 205,
                            "member": {
                                "kind": 205,
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 35,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 35,
                                        "end": 40
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 41,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 256,
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
                                            "flags": 768,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "flags": 256,
                                        "start": 44,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 44,
                                    "end": 45
                                },
                                "flags": 256,
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
                                        "flags": 768,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "flags": 256,
                                    "start": 47,
                                    "end": 48
                                },
                                "flags": 256,
                                "start": 47,
                                "end": 48
                            },
                            "flags": 256,
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
                                    "flags": 768,
                                    "start": 50,
                                    "end": 51
                                },
                                "flags": 256,
                                "start": 50,
                                "end": 51
                            },
                            "flags": 256,
                            "start": 50,
                            "end": 51
                        },
                        "flags": 256,
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
                                    "flags": 768,
                                    "start": 53,
                                    "end": 54
                                },
                                "flags": 256,
                                "start": 53,
                                "end": 54
                            },
                            "flags": 256,
                            "start": 53,
                            "end": 54
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 55,
                            "end": 56
                        },
                        "flags": 256,
                        "start": 54,
                        "end": 56
                    },
                    "flags": 256,
                    "start": 35,
                    "end": 56
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 57,
                    "end": 58
                },
                "autofix": 0,
                "flags": 256,
                "start": 35,
                "end": 58
            },
            "flags": 128,
            "start": 35,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 205,
                            "member": {
                                "kind": 205,
                                "member": {
                                    "kind": 205,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 59,
                                            "end": 62
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "autofix": 0,
                                        "flags": 256,
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
                                                        "flags": 768,
                                                        "start": 67,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 67,
                                                "end": 68
                                            },
                                            "flags": 256,
                                            "start": 66,
                                            "end": 69
                                        },
                                        "flags": 256,
                                        "start": 66,
                                        "end": 69
                                    },
                                    "flags": 256,
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
                                            "flags": 768,
                                            "start": 71,
                                            "end": 72
                                        },
                                        "flags": 256,
                                        "start": 71,
                                        "end": 72
                                    },
                                    "flags": 256,
                                    "start": 71,
                                    "end": 72
                                },
                                "flags": 256,
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
                                        "flags": 768,
                                        "start": 74,
                                        "end": 75
                                    },
                                    "flags": 256,
                                    "start": 74,
                                    "end": 75
                                },
                                "flags": 256,
                                "start": 74,
                                "end": 75
                            },
                            "flags": 256,
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
                                    "flags": 768,
                                    "start": 77,
                                    "end": 78
                                },
                                "flags": 256,
                                "start": 77,
                                "end": 78
                            },
                            "flags": 256,
                            "start": 77,
                            "end": 78
                        },
                        "flags": 256,
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
                                    "flags": 768,
                                    "start": 80,
                                    "end": 81
                                },
                                "flags": 256,
                                "start": 80,
                                "end": 81
                            },
                            "flags": 256,
                            "start": 80,
                            "end": 81
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 82,
                            "end": 83
                        },
                        "flags": 256,
                        "start": 81,
                        "end": 83
                    },
                    "flags": 256,
                    "start": 59,
                    "end": 83
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 84,
                    "end": 85
                },
                "autofix": 0,
                "flags": 256,
                "start": 59,
                "end": 85
            },
            "flags": 128,
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
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
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
                                                    "flags": 768,
                                                    "start": 92,
                                                    "end": 93
                                                },
                                                "flags": 256,
                                                "start": 92,
                                                "end": 93
                                            },
                                            "flags": 256,
                                            "start": 92,
                                            "end": 93
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 94,
                                            "end": 95
                                        },
                                        "flags": 256,
                                        "start": 93,
                                        "end": 95
                                    },
                                    "flags": 256,
                                    "start": 86,
                                    "end": 95
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 96,
                                    "end": 97
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 86,
                                "end": 97
                            },
                            "flags": 256,
                            "start": 86,
                            "end": 98
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 99,
                            "end": 100
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 86,
                        "end": 100
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 101,
                        "end": 102
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 86,
                    "end": 102
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 103,
                    "end": 104
                },
                "autofix": 0,
                "flags": 256,
                "start": 86,
                "end": 104
            },
            "flags": 128,
            "start": 86,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 205,
                                "member": {
                                    "kind": 205,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
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
                                                "flags": 768,
                                                "start": 111,
                                                "end": 112
                                            },
                                            "flags": 256,
                                            "start": 111,
                                            "end": 112
                                        },
                                        "flags": 256,
                                        "start": 111,
                                        "end": 112
                                    },
                                    "flags": 256,
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
                                            "flags": 768,
                                            "start": 114,
                                            "end": 115
                                        },
                                        "flags": 256,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "flags": 256,
                                    "start": 114,
                                    "end": 115
                                },
                                "flags": 256,
                                "start": 105,
                                "end": 115
                            },
                            "flags": 256,
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
                                    "flags": 768,
                                    "start": 118,
                                    "end": 119
                                },
                                "flags": 256,
                                "start": 118,
                                "end": 119
                            },
                            "flags": 256,
                            "start": 118,
                            "end": 119
                        },
                        "flags": 256,
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
                                    "flags": 768,
                                    "start": 121,
                                    "end": 122
                                },
                                "flags": 256,
                                "start": 121,
                                "end": 122
                            },
                            "flags": 256,
                            "start": 121,
                            "end": 122
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 123,
                            "end": 124
                        },
                        "flags": 256,
                        "start": 122,
                        "end": 124
                    },
                    "flags": 256,
                    "start": 105,
                    "end": 124
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 125,
                    "end": 126
                },
                "autofix": 0,
                "flags": 256,
                "start": 105,
                "end": 126
            },
            "flags": 128,
            "start": 105,
            "end": 127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 205,
                            "member": {
                                "kind": 205,
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
                                                "flags": 768,
                                                "start": 130,
                                                "end": 131
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 768,
                                                "start": 132,
                                                "end": 133
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 127,
                                            "end": 133
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 134,
                                            "end": 135
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 127,
                                        "end": 135
                                    },
                                    "flags": 256,
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
                                            "flags": 768,
                                            "start": 138,
                                            "end": 139
                                        },
                                        "flags": 256,
                                        "start": 138,
                                        "end": 139
                                    },
                                    "flags": 256,
                                    "start": 138,
                                    "end": 139
                                },
                                "flags": 256,
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
                                        "flags": 768,
                                        "start": 141,
                                        "end": 142
                                    },
                                    "flags": 256,
                                    "start": 141,
                                    "end": 142
                                },
                                "flags": 256,
                                "start": 141,
                                "end": 142
                            },
                            "flags": 256,
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
                                    "flags": 768,
                                    "start": 144,
                                    "end": 145
                                },
                                "flags": 256,
                                "start": 144,
                                "end": 145
                            },
                            "flags": 256,
                            "start": 144,
                            "end": 145
                        },
                        "flags": 256,
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
                                    "flags": 768,
                                    "start": 147,
                                    "end": 148
                                },
                                "flags": 256,
                                "start": 147,
                                "end": 148
                            },
                            "flags": 256,
                            "start": 147,
                            "end": 148
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 149,
                            "end": 150
                        },
                        "flags": 256,
                        "start": 148,
                        "end": 150
                    },
                    "flags": 256,
                    "start": 127,
                    "end": 150
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 151,
                    "end": 152
                },
                "autofix": 0,
                "flags": 256,
                "start": 127,
                "end": 152
            },
            "flags": 128,
            "start": 127,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 205,
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "member": {
                                        "kind": 205,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 768,
                                                "start": 156,
                                                "end": 157
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 768,
                                                "start": 158,
                                                "end": 159
                                            },
                                            "autofix": 0,
                                            "flags": 256,
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
                                                            "flags": 768,
                                                            "start": 162,
                                                            "end": 163
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 162,
                                                    "end": 163
                                                },
                                                "flags": 256,
                                                "start": 161,
                                                "end": 164
                                            },
                                            "flags": 256,
                                            "start": 161,
                                            "end": 164
                                        },
                                        "flags": 256,
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
                                                "flags": 768,
                                                "start": 166,
                                                "end": 167
                                            },
                                            "flags": 256,
                                            "start": 166,
                                            "end": 167
                                        },
                                        "flags": 256,
                                        "start": 166,
                                        "end": 167
                                    },
                                    "flags": 256,
                                    "start": 153,
                                    "end": 167
                                },
                                "flags": 256,
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
                                        "flags": 768,
                                        "start": 170,
                                        "end": 171
                                    },
                                    "flags": 256,
                                    "start": 170,
                                    "end": 171
                                },
                                "flags": 256,
                                "start": 170,
                                "end": 171
                            },
                            "flags": 256,
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
                                    "flags": 768,
                                    "start": 173,
                                    "end": 174
                                },
                                "flags": 256,
                                "start": 173,
                                "end": 174
                            },
                            "flags": 256,
                            "start": 173,
                            "end": 174
                        },
                        "flags": 256,
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
                                    "flags": 768,
                                    "start": 176,
                                    "end": 177
                                },
                                "flags": 256,
                                "start": 176,
                                "end": 177
                            },
                            "flags": 256,
                            "start": 176,
                            "end": 177
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 178,
                            "end": 179
                        },
                        "flags": 256,
                        "start": 177,
                        "end": 179
                    },
                    "flags": 256,
                    "start": 153,
                    "end": 179
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 180,
                    "end": 181
                },
                "autofix": 0,
                "flags": 256,
                "start": 153,
                "end": 181
            },
            "flags": 128,
            "start": 153,
            "end": 182
        }
    ],
    "isModule": false,
    "text": "a?.b.x.x.x.x.x;\n\na?.b?.x?.x?.x.x.x;\n\nz.z.a?.b?.x?.x?.x.x.x;\n\nz.z?.(a)?.b?.x?.x?.x.x.x;\n\n(a?.b.x.x).x.x.x;\n\n(a?.b?.x)?.x?.x.x.x;\n\n(z.z.a)?.b?.x?.x?.x.x.x;\n\n(z.z?.(a)?.b)?.x?.x?.x.x.x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 182
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

