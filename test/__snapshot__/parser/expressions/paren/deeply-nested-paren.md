# Kataw parser test case

## Input

`````js
((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))));

((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));

((((((((((((((((((((((((((((((((((((((((a, ((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 121,
                                                                            "expression": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 121,
                                                                                        "expression": {
                                                                                            "kind": 121,
                                                                                            "expression": {
                                                                                                "kind": 121,
                                                                                                "expression": {
                                                                                                    "kind": 121,
                                                                                                    "expression": {
                                                                                                        "kind": 121,
                                                                                                        "expression": {
                                                                                                            "kind": 121,
                                                                                                            "expression": {
                                                                                                                "kind": 121,
                                                                                                                "expression": {
                                                                                                                    "kind": 121,
                                                                                                                    "expression": {
                                                                                                                        "kind": 121,
                                                                                                                        "expression": {
                                                                                                                            "kind": 121,
                                                                                                                            "expression": {
                                                                                                                                "kind": 121,
                                                                                                                                "expression": {
                                                                                                                                    "kind": 121,
                                                                                                                                    "expression": {
                                                                                                                                        "kind": 121,
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 121,
                                                                                                                                            "expression": {
                                                                                                                                                "kind": 121,
                                                                                                                                                "expression": {
                                                                                                                                                    "kind": 121,
                                                                                                                                                    "expression": {
                                                                                                                                                        "kind": 121,
                                                                                                                                                        "expression": {
                                                                                                                                                            "kind": 121,
                                                                                                                                                            "expression": {
                                                                                                                                                                "kind": 121,
                                                                                                                                                                "expression": {
                                                                                                                                                                    "kind": 121,
                                                                                                                                                                    "expression": {
                                                                                                                                                                        "kind": 121,
                                                                                                                                                                        "expression": {
                                                                                                                                                                            "kind": 121,
                                                                                                                                                                            "expression": {
                                                                                                                                                                                "kind": 81921,
                                                                                                                                                                                "value": "a",
                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                "flags": 768,
                                                                                                                                                                                "start": 40,
                                                                                                                                                                                "end": 41
                                                                                                                                                                            },
                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                            "flags": 256,
                                                                                                                                                                            "start": 39,
                                                                                                                                                                            "end": 42
                                                                                                                                                                        },
                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 38,
                                                                                                                                                                        "end": 43
                                                                                                                                                                    },
                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                    "flags": 256,
                                                                                                                                                                    "start": 37,
                                                                                                                                                                    "end": 44
                                                                                                                                                                },
                                                                                                                                                                "autofix": 0,
                                                                                                                                                                "flags": 256,
                                                                                                                                                                "start": 36,
                                                                                                                                                                "end": 45
                                                                                                                                                            },
                                                                                                                                                            "autofix": 0,
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 35,
                                                                                                                                                            "end": 46
                                                                                                                                                        },
                                                                                                                                                        "autofix": 0,
                                                                                                                                                        "flags": 256,
                                                                                                                                                        "start": 34,
                                                                                                                                                        "end": 47
                                                                                                                                                    },
                                                                                                                                                    "autofix": 0,
                                                                                                                                                    "flags": 256,
                                                                                                                                                    "start": 33,
                                                                                                                                                    "end": 48
                                                                                                                                                },
                                                                                                                                                "autofix": 0,
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 32,
                                                                                                                                                "end": 49
                                                                                                                                            },
                                                                                                                                            "autofix": 0,
                                                                                                                                            "flags": 256,
                                                                                                                                            "start": 31,
                                                                                                                                            "end": 50
                                                                                                                                        },
                                                                                                                                        "autofix": 0,
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 30,
                                                                                                                                        "end": 51
                                                                                                                                    },
                                                                                                                                    "autofix": 0,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 29,
                                                                                                                                    "end": 52
                                                                                                                                },
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 256,
                                                                                                                                "start": 28,
                                                                                                                                "end": 53
                                                                                                                            },
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 27,
                                                                                                                            "end": 54
                                                                                                                        },
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 26,
                                                                                                                        "end": 55
                                                                                                                    },
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 25,
                                                                                                                    "end": 56
                                                                                                                },
                                                                                                                "autofix": 0,
                                                                                                                "flags": 256,
                                                                                                                "start": 24,
                                                                                                                "end": 57
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 23,
                                                                                                            "end": 58
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 22,
                                                                                                        "end": 59
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 21,
                                                                                                    "end": 60
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 20,
                                                                                                "end": 61
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 19,
                                                                                            "end": 62
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 18,
                                                                                        "end": 63
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 17,
                                                                                    "end": 64
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 16,
                                                                                "end": 65
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 15,
                                                                            "end": 66
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 14,
                                                                        "end": 67
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 13,
                                                                    "end": 68
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 12,
                                                                "end": 69
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 11,
                                                            "end": 70
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 10,
                                                        "end": 71
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 9,
                                                    "end": 72
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 8,
                                                "end": 73
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 74
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 75
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 76
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 77
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 78
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 79
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 80
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 121,
                                                                            "expression": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 121,
                                                                                        "expression": {
                                                                                            "kind": 121,
                                                                                            "expression": {
                                                                                                "kind": 121,
                                                                                                "expression": {
                                                                                                    "kind": 121,
                                                                                                    "expression": {
                                                                                                        "kind": 121,
                                                                                                        "expression": {
                                                                                                            "kind": 121,
                                                                                                            "expression": {
                                                                                                                "kind": 121,
                                                                                                                "expression": {
                                                                                                                    "kind": 121,
                                                                                                                    "expression": {
                                                                                                                        "kind": 121,
                                                                                                                        "expression": {
                                                                                                                            "kind": 121,
                                                                                                                            "expression": {
                                                                                                                                "kind": 121,
                                                                                                                                "expression": {
                                                                                                                                    "kind": 121,
                                                                                                                                    "expression": {
                                                                                                                                        "kind": 121,
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 121,
                                                                                                                                            "expression": {
                                                                                                                                                "kind": 121,
                                                                                                                                                "expression": {
                                                                                                                                                    "kind": 121,
                                                                                                                                                    "expression": {
                                                                                                                                                        "kind": 121,
                                                                                                                                                        "expression": {
                                                                                                                                                            "kind": 121,
                                                                                                                                                            "expression": {
                                                                                                                                                                "kind": 121,
                                                                                                                                                                "expression": {
                                                                                                                                                                    "kind": 121,
                                                                                                                                                                    "expression": {
                                                                                                                                                                        "kind": 121,
                                                                                                                                                                        "expression": {
                                                                                                                                                                            "kind": 121,
                                                                                                                                                                            "expression": {
                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                "expression": {
                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                    "expression": {
                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                        "expression": {
                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                                                                "kind": 81921,
                                                                                                                                                                                                                                                                                                                                                "value": "a",
                                                                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                                                                "flags": 768,
                                                                                                                                                                                                                                                                                                                                                "start": 164,
                                                                                                                                                                                                                                                                                                                                                "end": 165
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                                                                            "start": 163,
                                                                                                                                                                                                                                                                                                                                            "end": 166
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                                                                        "start": 162,
                                                                                                                                                                                                                                                                                                                                        "end": 167
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                                                    "start": 161,
                                                                                                                                                                                                                                                                                                                                    "end": 168
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                                                "start": 160,
                                                                                                                                                                                                                                                                                                                                "end": 169
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                                                            "start": 159,
                                                                                                                                                                                                                                                                                                                            "end": 170
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                                                        "start": 158,
                                                                                                                                                                                                                                                                                                                        "end": 171
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                                    "start": 157,
                                                                                                                                                                                                                                                                                                                    "end": 172
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                                "start": 156,
                                                                                                                                                                                                                                                                                                                "end": 173
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                                            "start": 155,
                                                                                                                                                                                                                                                                                                            "end": 174
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                                        "start": 154,
                                                                                                                                                                                                                                                                                                        "end": 175
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                    "start": 153,
                                                                                                                                                                                                                                                                                                    "end": 176
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                "start": 152,
                                                                                                                                                                                                                                                                                                "end": 177
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                            "start": 151,
                                                                                                                                                                                                                                                                                            "end": 178
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                        "start": 150,
                                                                                                                                                                                                                                                                                        "end": 179
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                    "start": 149,
                                                                                                                                                                                                                                                                                    "end": 180
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                "start": 148,
                                                                                                                                                                                                                                                                                "end": 181
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                            "start": 147,
                                                                                                                                                                                                                                                                            "end": 182
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                        "start": 146,
                                                                                                                                                                                                                                                                        "end": 183
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                    "start": 145,
                                                                                                                                                                                                                                                                    "end": 184
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                "start": 144,
                                                                                                                                                                                                                                                                "end": 185
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                            "start": 143,
                                                                                                                                                                                                                                                            "end": 186
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                        "start": 142,
                                                                                                                                                                                                                                                        "end": 187
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                    "start": 141,
                                                                                                                                                                                                                                                    "end": 188
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                "start": 140,
                                                                                                                                                                                                                                                "end": 189
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                            "start": 139,
                                                                                                                                                                                                                                            "end": 190
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                        "start": 138,
                                                                                                                                                                                                                                        "end": 191
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                    "start": 137,
                                                                                                                                                                                                                                    "end": 192
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                "start": 136,
                                                                                                                                                                                                                                "end": 193
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                            "start": 135,
                                                                                                                                                                                                                            "end": 194
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                        "start": 134,
                                                                                                                                                                                                                        "end": 195
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                    "start": 133,
                                                                                                                                                                                                                    "end": 196
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                "start": 132,
                                                                                                                                                                                                                "end": 197
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                            "start": 131,
                                                                                                                                                                                                            "end": 198
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                        "start": 130,
                                                                                                                                                                                                        "end": 199
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                    "start": 129,
                                                                                                                                                                                                    "end": 200
                                                                                                                                                                                                },
                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                "start": 128,
                                                                                                                                                                                                "end": 201
                                                                                                                                                                                            },
                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                            "start": 127,
                                                                                                                                                                                            "end": 202
                                                                                                                                                                                        },
                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                        "start": 126,
                                                                                                                                                                                        "end": 203
                                                                                                                                                                                    },
                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                    "start": 125,
                                                                                                                                                                                    "end": 204
                                                                                                                                                                                },
                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                "start": 124,
                                                                                                                                                                                "end": 205
                                                                                                                                                                            },
                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                            "flags": 256,
                                                                                                                                                                            "start": 123,
                                                                                                                                                                            "end": 206
                                                                                                                                                                        },
                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 122,
                                                                                                                                                                        "end": 207
                                                                                                                                                                    },
                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                    "flags": 256,
                                                                                                                                                                    "start": 121,
                                                                                                                                                                    "end": 208
                                                                                                                                                                },
                                                                                                                                                                "autofix": 0,
                                                                                                                                                                "flags": 256,
                                                                                                                                                                "start": 120,
                                                                                                                                                                "end": 209
                                                                                                                                                            },
                                                                                                                                                            "autofix": 0,
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 119,
                                                                                                                                                            "end": 210
                                                                                                                                                        },
                                                                                                                                                        "autofix": 0,
                                                                                                                                                        "flags": 256,
                                                                                                                                                        "start": 118,
                                                                                                                                                        "end": 211
                                                                                                                                                    },
                                                                                                                                                    "autofix": 0,
                                                                                                                                                    "flags": 256,
                                                                                                                                                    "start": 117,
                                                                                                                                                    "end": 212
                                                                                                                                                },
                                                                                                                                                "autofix": 0,
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 116,
                                                                                                                                                "end": 213
                                                                                                                                            },
                                                                                                                                            "autofix": 0,
                                                                                                                                            "flags": 256,
                                                                                                                                            "start": 115,
                                                                                                                                            "end": 214
                                                                                                                                        },
                                                                                                                                        "autofix": 0,
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 114,
                                                                                                                                        "end": 215
                                                                                                                                    },
                                                                                                                                    "autofix": 0,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 113,
                                                                                                                                    "end": 216
                                                                                                                                },
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 256,
                                                                                                                                "start": 112,
                                                                                                                                "end": 217
                                                                                                                            },
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 111,
                                                                                                                            "end": 218
                                                                                                                        },
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 110,
                                                                                                                        "end": 219
                                                                                                                    },
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 109,
                                                                                                                    "end": 220
                                                                                                                },
                                                                                                                "autofix": 0,
                                                                                                                "flags": 256,
                                                                                                                "start": 108,
                                                                                                                "end": 221
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 107,
                                                                                                            "end": 222
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 106,
                                                                                                        "end": 223
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 105,
                                                                                                    "end": 224
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 104,
                                                                                                "end": 225
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 103,
                                                                                            "end": 226
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 102,
                                                                                        "end": 227
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 101,
                                                                                    "end": 228
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 100,
                                                                                "end": 229
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 99,
                                                                            "end": 230
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 98,
                                                                        "end": 231
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 97,
                                                                    "end": 232
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 96,
                                                                "end": 233
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 95,
                                                            "end": 234
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 94,
                                                        "end": 235
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 93,
                                                    "end": 236
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 92,
                                                "end": 237
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 91,
                                            "end": 238
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 90,
                                        "end": 239
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 89,
                                    "end": 240
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 88,
                                "end": 241
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 87,
                            "end": 242
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 86,
                        "end": 243
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 85,
                    "end": 244
                },
                "autofix": 0,
                "flags": 256,
                "start": 82,
                "end": 245
            },
            "autofix": 0,
            "flags": 128,
            "start": 82,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 121,
                                                                            "expression": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 121,
                                                                                        "expression": {
                                                                                            "kind": 121,
                                                                                            "expression": {
                                                                                                "kind": 121,
                                                                                                "expression": {
                                                                                                    "kind": 121,
                                                                                                    "expression": {
                                                                                                        "kind": 121,
                                                                                                        "expression": {
                                                                                                            "kind": 121,
                                                                                                            "expression": {
                                                                                                                "kind": 121,
                                                                                                                "expression": {
                                                                                                                    "kind": 121,
                                                                                                                    "expression": {
                                                                                                                        "kind": 121,
                                                                                                                        "expression": {
                                                                                                                            "kind": 121,
                                                                                                                            "expression": {
                                                                                                                                "kind": 121,
                                                                                                                                "expression": {
                                                                                                                                    "kind": 121,
                                                                                                                                    "expression": {
                                                                                                                                        "kind": 121,
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 121,
                                                                                                                                            "expression": {
                                                                                                                                                "kind": 121,
                                                                                                                                                "expression": {
                                                                                                                                                    "kind": 121,
                                                                                                                                                    "expression": {
                                                                                                                                                        "kind": 121,
                                                                                                                                                        "expression": {
                                                                                                                                                            "kind": 121,
                                                                                                                                                            "expression": {
                                                                                                                                                                "kind": 121,
                                                                                                                                                                "expression": {
                                                                                                                                                                    "kind": 121,
                                                                                                                                                                    "expression": {
                                                                                                                                                                        "kind": 121,
                                                                                                                                                                        "expression": {
                                                                                                                                                                            "kind": 121,
                                                                                                                                                                            "expression": {
                                                                                                                                                                                "kind": 132,
                                                                                                                                                                                "expressions": [
                                                                                                                                                                                    {
                                                                                                                                                                                        "kind": 81921,
                                                                                                                                                                                        "value": "a",
                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                        "flags": 768,
                                                                                                                                                                                        "start": 288,
                                                                                                                                                                                        "end": 289
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                        "expression": {
                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                                                        "kind": 121,
                                                                                                                                                                                                                                                                                                                                        "expression": {
                                                                                                                                                                                                                                                                                                                                            "kind": 121,
                                                                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                                                                "kind": 121,
                                                                                                                                                                                                                                                                                                                                                "expression": {
                                                                                                                                                                                                                                                                                                                                                    "kind": 121,
                                                                                                                                                                                                                                                                                                                                                    "expression": {
                                                                                                                                                                                                                                                                                                                                                        "kind": 81921,
                                                                                                                                                                                                                                                                                                                                                        "value": "a",
                                                                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                                                                        "flags": 768,
                                                                                                                                                                                                                                                                                                                                                        "start": 331,
                                                                                                                                                                                                                                                                                                                                                        "end": 332
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                                                                    "start": 330,
                                                                                                                                                                                                                                                                                                                                                    "end": 333
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                                                                "start": 329,
                                                                                                                                                                                                                                                                                                                                                "end": 334
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                                                                            "start": 328,
                                                                                                                                                                                                                                                                                                                                            "end": 335
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                                                                        "start": 327,
                                                                                                                                                                                                                                                                                                                                        "end": 336
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                                                    "start": 326,
                                                                                                                                                                                                                                                                                                                                    "end": 337
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                                                "start": 325,
                                                                                                                                                                                                                                                                                                                                "end": 338
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                                                            "start": 324,
                                                                                                                                                                                                                                                                                                                            "end": 339
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                                                        "start": 323,
                                                                                                                                                                                                                                                                                                                        "end": 340
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                                    "start": 322,
                                                                                                                                                                                                                                                                                                                    "end": 341
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                                "start": 321,
                                                                                                                                                                                                                                                                                                                "end": 342
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                                            "start": 320,
                                                                                                                                                                                                                                                                                                            "end": 343
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                                        "start": 319,
                                                                                                                                                                                                                                                                                                        "end": 344
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                                    "start": 318,
                                                                                                                                                                                                                                                                                                    "end": 345
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                                "start": 317,
                                                                                                                                                                                                                                                                                                "end": 346
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                                            "start": 316,
                                                                                                                                                                                                                                                                                            "end": 347
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                                        "start": 315,
                                                                                                                                                                                                                                                                                        "end": 348
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                                    "start": 314,
                                                                                                                                                                                                                                                                                    "end": 349
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                                "start": 313,
                                                                                                                                                                                                                                                                                "end": 350
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                                            "start": 312,
                                                                                                                                                                                                                                                                            "end": 351
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                                        "start": 311,
                                                                                                                                                                                                                                                                        "end": 352
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                                    "start": 310,
                                                                                                                                                                                                                                                                    "end": 353
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                                "start": 309,
                                                                                                                                                                                                                                                                "end": 354
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                                            "start": 308,
                                                                                                                                                                                                                                                            "end": 355
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                                        "start": 307,
                                                                                                                                                                                                                                                        "end": 356
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                                    "start": 306,
                                                                                                                                                                                                                                                    "end": 357
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                                "start": 305,
                                                                                                                                                                                                                                                "end": 358
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                                            "start": 304,
                                                                                                                                                                                                                                            "end": 359
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                                        "start": 303,
                                                                                                                                                                                                                                        "end": 360
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                                    "start": 302,
                                                                                                                                                                                                                                    "end": 361
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                                "start": 301,
                                                                                                                                                                                                                                "end": 362
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                                            "start": 300,
                                                                                                                                                                                                                            "end": 363
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                                        "start": 299,
                                                                                                                                                                                                                        "end": 364
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                                    "start": 298,
                                                                                                                                                                                                                    "end": 365
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                                "start": 297,
                                                                                                                                                                                                                "end": 366
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                                            "start": 296,
                                                                                                                                                                                                            "end": 367
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                                        "start": 295,
                                                                                                                                                                                                        "end": 368
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                                                    "flags": 256,
                                                                                                                                                                                                    "start": 294,
                                                                                                                                                                                                    "end": 369
                                                                                                                                                                                                },
                                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                                "start": 293,
                                                                                                                                                                                                "end": 370
                                                                                                                                                                                            },
                                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                                            "flags": 256,
                                                                                                                                                                                            "start": 292,
                                                                                                                                                                                            "end": 371
                                                                                                                                                                                        },
                                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                                        "flags": 256,
                                                                                                                                                                                        "start": 290,
                                                                                                                                                                                        "end": 372
                                                                                                                                                                                    }
                                                                                                                                                                                ],
                                                                                                                                                                                "autofix": 0,
                                                                                                                                                                                "flags": 256,
                                                                                                                                                                                "start": 287,
                                                                                                                                                                                "end": 372
                                                                                                                                                                            },
                                                                                                                                                                            "autofix": 0,
                                                                                                                                                                            "flags": 256,
                                                                                                                                                                            "start": 287,
                                                                                                                                                                            "end": 373
                                                                                                                                                                        },
                                                                                                                                                                        "autofix": 0,
                                                                                                                                                                        "flags": 256,
                                                                                                                                                                        "start": 286,
                                                                                                                                                                        "end": 374
                                                                                                                                                                    },
                                                                                                                                                                    "autofix": 0,
                                                                                                                                                                    "flags": 256,
                                                                                                                                                                    "start": 285,
                                                                                                                                                                    "end": 375
                                                                                                                                                                },
                                                                                                                                                                "autofix": 0,
                                                                                                                                                                "flags": 256,
                                                                                                                                                                "start": 284,
                                                                                                                                                                "end": 376
                                                                                                                                                            },
                                                                                                                                                            "autofix": 0,
                                                                                                                                                            "flags": 256,
                                                                                                                                                            "start": 283,
                                                                                                                                                            "end": 377
                                                                                                                                                        },
                                                                                                                                                        "autofix": 0,
                                                                                                                                                        "flags": 256,
                                                                                                                                                        "start": 282,
                                                                                                                                                        "end": 378
                                                                                                                                                    },
                                                                                                                                                    "autofix": 0,
                                                                                                                                                    "flags": 256,
                                                                                                                                                    "start": 281,
                                                                                                                                                    "end": 379
                                                                                                                                                },
                                                                                                                                                "autofix": 0,
                                                                                                                                                "flags": 256,
                                                                                                                                                "start": 280,
                                                                                                                                                "end": 380
                                                                                                                                            },
                                                                                                                                            "autofix": 0,
                                                                                                                                            "flags": 256,
                                                                                                                                            "start": 279,
                                                                                                                                            "end": 381
                                                                                                                                        },
                                                                                                                                        "autofix": 0,
                                                                                                                                        "flags": 256,
                                                                                                                                        "start": 278,
                                                                                                                                        "end": 382
                                                                                                                                    },
                                                                                                                                    "autofix": 0,
                                                                                                                                    "flags": 256,
                                                                                                                                    "start": 277,
                                                                                                                                    "end": 383
                                                                                                                                },
                                                                                                                                "autofix": 0,
                                                                                                                                "flags": 256,
                                                                                                                                "start": 276,
                                                                                                                                "end": 384
                                                                                                                            },
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 256,
                                                                                                                            "start": 275,
                                                                                                                            "end": 385
                                                                                                                        },
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 274,
                                                                                                                        "end": 386
                                                                                                                    },
                                                                                                                    "autofix": 0,
                                                                                                                    "flags": 256,
                                                                                                                    "start": 273,
                                                                                                                    "end": 387
                                                                                                                },
                                                                                                                "autofix": 0,
                                                                                                                "flags": 256,
                                                                                                                "start": 272,
                                                                                                                "end": 388
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 271,
                                                                                                            "end": 389
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 270,
                                                                                                        "end": 390
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 269,
                                                                                                    "end": 391
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 268,
                                                                                                "end": 392
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 267,
                                                                                            "end": 393
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 266,
                                                                                        "end": 394
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 265,
                                                                                    "end": 395
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 264,
                                                                                "end": 396
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 263,
                                                                            "end": 397
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 262,
                                                                        "end": 398
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 261,
                                                                    "end": 399
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 260,
                                                                "end": 400
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 259,
                                                            "end": 401
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 258,
                                                        "end": 402
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 257,
                                                    "end": 403
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 256,
                                                "end": 404
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 255,
                                            "end": 405
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 254,
                                        "end": 406
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 253,
                                    "end": 407
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 252,
                                "end": 408
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 251,
                            "end": 409
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 250,
                        "end": 410
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 249,
                    "end": 411
                },
                "autofix": 0,
                "flags": 256,
                "start": 246,
                "end": 412
            },
            "autofix": 0,
            "flags": 128,
            "start": 246,
            "end": 413
        }
    ],
    "isModule": false,
    "text": "((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))));\n\n((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));\n\n((((((((((((((((((((((((((((((((((((((((a, ((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 413
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

