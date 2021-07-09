# Kataw parser test case

## Input

`````js
((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))));

((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));

((((((((((((((((((((((((((((((((((((((((a, ((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
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
                                                                                                                                                                                "kind": 134299649,
                                                                                                                                                                                "text": "a",
                                                                                                                                                                                "rawText": "a",
                                                                                                                                                                                "flags": 96,
                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                "start": 40,
                                                                                                                                                                                "end": 41
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 39,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 32,
                                                                                                                                                                            "end": 42
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 38,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 32,
                                                                                                                                                                        "end": 43
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 37,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 32,
                                                                                                                                                                    "end": 44
                                                                                                                                                                },
                                                                                                                                                                "flags": 36,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 32,
                                                                                                                                                                "end": 45
                                                                                                                                                            },
                                                                                                                                                            "flags": 35,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 32,
                                                                                                                                                            "end": 46
                                                                                                                                                        },
                                                                                                                                                        "flags": 34,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 32,
                                                                                                                                                        "end": 47
                                                                                                                                                    },
                                                                                                                                                    "flags": 33,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 32,
                                                                                                                                                    "end": 48
                                                                                                                                                },
                                                                                                                                                "flags": 32,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 32,
                                                                                                                                                "end": 49
                                                                                                                                            },
                                                                                                                                            "flags": 31,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 32,
                                                                                                                                            "end": 50
                                                                                                                                        },
                                                                                                                                        "flags": 30,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 32,
                                                                                                                                        "end": 51
                                                                                                                                    },
                                                                                                                                    "flags": 29,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 32,
                                                                                                                                    "end": 52
                                                                                                                                },
                                                                                                                                "flags": 28,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 32,
                                                                                                                                "end": 53
                                                                                                                            },
                                                                                                                            "flags": 27,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 32,
                                                                                                                            "end": 54
                                                                                                                        },
                                                                                                                        "flags": 26,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 32,
                                                                                                                        "end": 55
                                                                                                                    },
                                                                                                                    "flags": 25,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 32,
                                                                                                                    "end": 56
                                                                                                                },
                                                                                                                "flags": 24,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 32,
                                                                                                                "end": 57
                                                                                                            },
                                                                                                            "flags": 23,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 32,
                                                                                                            "end": 58
                                                                                                        },
                                                                                                        "flags": 22,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 32,
                                                                                                        "end": 59
                                                                                                    },
                                                                                                    "flags": 21,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 32,
                                                                                                    "end": 60
                                                                                                },
                                                                                                "flags": 20,
                                                                                                "transformFlags": 0,
                                                                                                "start": 32,
                                                                                                "end": 61
                                                                                            },
                                                                                            "flags": 19,
                                                                                            "transformFlags": 0,
                                                                                            "start": 32,
                                                                                            "end": 62
                                                                                        },
                                                                                        "flags": 18,
                                                                                        "transformFlags": 0,
                                                                                        "start": 32,
                                                                                        "end": 63
                                                                                    },
                                                                                    "flags": 17,
                                                                                    "transformFlags": 0,
                                                                                    "start": 32,
                                                                                    "end": 64
                                                                                },
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 65
                                                                            },
                                                                            "flags": 15,
                                                                            "transformFlags": 0,
                                                                            "start": 32,
                                                                            "end": 66
                                                                        },
                                                                        "flags": 14,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 67
                                                                    },
                                                                    "flags": 13,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 68
                                                                },
                                                                "flags": 12,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 69
                                                            },
                                                            "flags": 11,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 70
                                                        },
                                                        "flags": 10,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 71
                                                    },
                                                    "flags": 9,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 72
                                                },
                                                "flags": 8,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 73
                                            },
                                            "flags": 7,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 74
                                        },
                                        "flags": 6,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 75
                                    },
                                    "flags": 5,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 76
                                },
                                "flags": 4,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 77
                            },
                            "flags": 3,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 78
                        },
                        "flags": 2,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 79
                    },
                    "flags": 1,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 80
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                                                                                                                                                                                                                                                                                                                                "kind": 134299649,
                                                                                                                                                                                                                                                                                                                                                "text": "a",
                                                                                                                                                                                                                                                                                                                                                "rawText": "a",
                                                                                                                                                                                                                                                                                                                                                "flags": 96,
                                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                                "start": 164,
                                                                                                                                                                                                                                                                                                                                                "end": 165
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            "flags": 163,
                                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                                                                            "end": 166
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        "flags": 162,
                                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                                                                        "end": 167
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    "flags": 161,
                                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                                                    "end": 168
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                "flags": 160,
                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                                                "end": 169
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            "flags": 159,
                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                                                            "end": 170
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        "flags": 158,
                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                                                        "end": 171
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "flags": 157,
                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                                    "end": 172
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                "flags": 156,
                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                                "end": 173
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            "flags": 155,
                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                                            "end": 174
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        "flags": 154,
                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                                        "end": 175
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "flags": 153,
                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                    "end": 176
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "flags": 152,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                "end": 177
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "flags": 151,
                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                            "end": 178
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "flags": 150,
                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                        "end": 179
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 149,
                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                    "end": 180
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "flags": 148,
                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                "end": 181
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "flags": 147,
                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                            "end": 182
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "flags": 146,
                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                        "end": 183
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "flags": 145,
                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                    "end": 184
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "flags": 144,
                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                "end": 185
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "flags": 143,
                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                            "end": 186
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "flags": 142,
                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                        "end": 187
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "flags": 141,
                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                    "end": 188
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "flags": 140,
                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                "end": 189
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "flags": 139,
                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                            "end": 190
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "flags": 138,
                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                        "end": 191
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "flags": 137,
                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                    "end": 192
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "flags": 136,
                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                "end": 193
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "flags": 135,
                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                            "end": 194
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "flags": 134,
                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                        "end": 195
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "flags": 133,
                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                    "end": 196
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "flags": 132,
                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                "end": 197
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flags": 131,
                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                            "end": 198
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "flags": 130,
                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                        "end": 199
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flags": 129,
                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                    "end": 200
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 128,
                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                "end": 201
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 127,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                            "end": 202
                                                                                                                                                                                        },
                                                                                                                                                                                        "flags": 126,
                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                        "end": 203
                                                                                                                                                                                    },
                                                                                                                                                                                    "flags": 125,
                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                    "end": 204
                                                                                                                                                                                },
                                                                                                                                                                                "flags": 124,
                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                "start": 32,
                                                                                                                                                                                "end": 205
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 123,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 32,
                                                                                                                                                                            "end": 206
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 122,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 32,
                                                                                                                                                                        "end": 207
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 121,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 32,
                                                                                                                                                                    "end": 208
                                                                                                                                                                },
                                                                                                                                                                "flags": 120,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 32,
                                                                                                                                                                "end": 209
                                                                                                                                                            },
                                                                                                                                                            "flags": 119,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 32,
                                                                                                                                                            "end": 210
                                                                                                                                                        },
                                                                                                                                                        "flags": 118,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 32,
                                                                                                                                                        "end": 211
                                                                                                                                                    },
                                                                                                                                                    "flags": 117,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 32,
                                                                                                                                                    "end": 212
                                                                                                                                                },
                                                                                                                                                "flags": 116,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 32,
                                                                                                                                                "end": 213
                                                                                                                                            },
                                                                                                                                            "flags": 115,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 32,
                                                                                                                                            "end": 214
                                                                                                                                        },
                                                                                                                                        "flags": 114,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 32,
                                                                                                                                        "end": 215
                                                                                                                                    },
                                                                                                                                    "flags": 113,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 32,
                                                                                                                                    "end": 216
                                                                                                                                },
                                                                                                                                "flags": 112,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 32,
                                                                                                                                "end": 217
                                                                                                                            },
                                                                                                                            "flags": 111,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 32,
                                                                                                                            "end": 218
                                                                                                                        },
                                                                                                                        "flags": 110,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 32,
                                                                                                                        "end": 219
                                                                                                                    },
                                                                                                                    "flags": 109,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 32,
                                                                                                                    "end": 220
                                                                                                                },
                                                                                                                "flags": 108,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 32,
                                                                                                                "end": 221
                                                                                                            },
                                                                                                            "flags": 107,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 32,
                                                                                                            "end": 222
                                                                                                        },
                                                                                                        "flags": 106,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 32,
                                                                                                        "end": 223
                                                                                                    },
                                                                                                    "flags": 105,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 32,
                                                                                                    "end": 224
                                                                                                },
                                                                                                "flags": 104,
                                                                                                "transformFlags": 0,
                                                                                                "start": 32,
                                                                                                "end": 225
                                                                                            },
                                                                                            "flags": 103,
                                                                                            "transformFlags": 0,
                                                                                            "start": 32,
                                                                                            "end": 226
                                                                                        },
                                                                                        "flags": 102,
                                                                                        "transformFlags": 0,
                                                                                        "start": 32,
                                                                                        "end": 227
                                                                                    },
                                                                                    "flags": 101,
                                                                                    "transformFlags": 0,
                                                                                    "start": 32,
                                                                                    "end": 228
                                                                                },
                                                                                "flags": 100,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 229
                                                                            },
                                                                            "flags": 99,
                                                                            "transformFlags": 0,
                                                                            "start": 32,
                                                                            "end": 230
                                                                        },
                                                                        "flags": 98,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 231
                                                                    },
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 232
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 233
                                                            },
                                                            "flags": 95,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 234
                                                        },
                                                        "flags": 94,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 235
                                                    },
                                                    "flags": 93,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 236
                                                },
                                                "flags": 92,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 237
                                            },
                                            "flags": 91,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 238
                                        },
                                        "flags": 90,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 239
                                    },
                                    "flags": 89,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 240
                                },
                                "flags": 88,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 241
                            },
                            "flags": 87,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 242
                        },
                        "flags": 86,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 243
                    },
                    "flags": 85,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 244
                },
                "flags": 82,
                "transformFlags": 0,
                "start": 33,
                "end": 245
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                                                                                                                                                                        "kind": 134299649,
                                                                                                                                                                                        "text": "a",
                                                                                                                                                                                        "rawText": "a",
                                                                                                                                                                                        "flags": 96,
                                                                                                                                                                                        "transformFlags": 0,
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
                                                                                                                                                                                                                                                                                                                                                        "kind": 134299649,
                                                                                                                                                                                                                                                                                                                                                        "text": "a",
                                                                                                                                                                                                                                                                                                                                                        "rawText": "a",
                                                                                                                                                                                                                                                                                                                                                        "flags": 96,
                                                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                                        "start": 331,
                                                                                                                                                                                                                                                                                                                                                        "end": 332
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    "flags": 330,
                                                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                                                                    "end": 333
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                "flags": 329,
                                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                                                                "end": 334
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            "flags": 328,
                                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                                                                            "end": 335
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        "flags": 327,
                                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                                                                        "end": 336
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    "flags": 326,
                                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                                                    "end": 337
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                "flags": 325,
                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                                                "end": 338
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            "flags": 324,
                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                                                            "end": 339
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        "flags": 323,
                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                                                        "end": 340
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "flags": 322,
                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                                    "end": 341
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                "flags": 321,
                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                                "end": 342
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            "flags": 320,
                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                                            "end": 343
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        "flags": 319,
                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                                        "end": 344
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "flags": 318,
                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                                    "end": 345
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "flags": 317,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                                "end": 346
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "flags": 316,
                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                                            "end": 347
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "flags": 315,
                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                                        "end": 348
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 314,
                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                                    "end": 349
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "flags": 313,
                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                                "end": 350
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "flags": 312,
                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                                            "end": 351
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "flags": 311,
                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                                        "end": 352
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "flags": 310,
                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                                    "end": 353
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "flags": 309,
                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                                "end": 354
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "flags": 308,
                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                                            "end": 355
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "flags": 307,
                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                                        "end": 356
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "flags": 306,
                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                                    "end": 357
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "flags": 305,
                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                                "end": 358
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "flags": 304,
                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                                            "end": 359
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "flags": 303,
                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                                        "end": 360
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "flags": 302,
                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                                    "end": 361
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "flags": 301,
                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                                "end": 362
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "flags": 300,
                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                                            "end": 363
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "flags": 299,
                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                                        "end": 364
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "flags": 298,
                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                                    "end": 365
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "flags": 297,
                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                                "end": 366
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flags": 296,
                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                                            "end": 367
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "flags": 295,
                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                                        "end": 368
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flags": 294,
                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                    "start": 32,
                                                                                                                                                                                                    "end": 369
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 293,
                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                "start": 32,
                                                                                                                                                                                                "end": 370
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 292,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 32,
                                                                                                                                                                                            "end": 371
                                                                                                                                                                                        },
                                                                                                                                                                                        "flags": 290,
                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                        "start": 32,
                                                                                                                                                                                        "end": 372
                                                                                                                                                                                    }
                                                                                                                                                                                ],
                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                "transformFlags": 1024,
                                                                                                                                                                                "start": 287,
                                                                                                                                                                                "end": 372
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 287,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 32,
                                                                                                                                                                            "end": 373
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 286,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 32,
                                                                                                                                                                        "end": 374
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 285,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 32,
                                                                                                                                                                    "end": 375
                                                                                                                                                                },
                                                                                                                                                                "flags": 284,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 32,
                                                                                                                                                                "end": 376
                                                                                                                                                            },
                                                                                                                                                            "flags": 283,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 32,
                                                                                                                                                            "end": 377
                                                                                                                                                        },
                                                                                                                                                        "flags": 282,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 32,
                                                                                                                                                        "end": 378
                                                                                                                                                    },
                                                                                                                                                    "flags": 281,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 32,
                                                                                                                                                    "end": 379
                                                                                                                                                },
                                                                                                                                                "flags": 280,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 32,
                                                                                                                                                "end": 380
                                                                                                                                            },
                                                                                                                                            "flags": 279,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 32,
                                                                                                                                            "end": 381
                                                                                                                                        },
                                                                                                                                        "flags": 278,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 32,
                                                                                                                                        "end": 382
                                                                                                                                    },
                                                                                                                                    "flags": 277,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 32,
                                                                                                                                    "end": 383
                                                                                                                                },
                                                                                                                                "flags": 276,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 32,
                                                                                                                                "end": 384
                                                                                                                            },
                                                                                                                            "flags": 275,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 32,
                                                                                                                            "end": 385
                                                                                                                        },
                                                                                                                        "flags": 274,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 32,
                                                                                                                        "end": 386
                                                                                                                    },
                                                                                                                    "flags": 273,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 32,
                                                                                                                    "end": 387
                                                                                                                },
                                                                                                                "flags": 272,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 32,
                                                                                                                "end": 388
                                                                                                            },
                                                                                                            "flags": 271,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 32,
                                                                                                            "end": 389
                                                                                                        },
                                                                                                        "flags": 270,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 32,
                                                                                                        "end": 390
                                                                                                    },
                                                                                                    "flags": 269,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 32,
                                                                                                    "end": 391
                                                                                                },
                                                                                                "flags": 268,
                                                                                                "transformFlags": 0,
                                                                                                "start": 32,
                                                                                                "end": 392
                                                                                            },
                                                                                            "flags": 267,
                                                                                            "transformFlags": 0,
                                                                                            "start": 32,
                                                                                            "end": 393
                                                                                        },
                                                                                        "flags": 266,
                                                                                        "transformFlags": 0,
                                                                                        "start": 32,
                                                                                        "end": 394
                                                                                    },
                                                                                    "flags": 265,
                                                                                    "transformFlags": 0,
                                                                                    "start": 32,
                                                                                    "end": 395
                                                                                },
                                                                                "flags": 264,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 396
                                                                            },
                                                                            "flags": 263,
                                                                            "transformFlags": 0,
                                                                            "start": 32,
                                                                            "end": 397
                                                                        },
                                                                        "flags": 262,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 398
                                                                    },
                                                                    "flags": 261,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 399
                                                                },
                                                                "flags": 260,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 400
                                                            },
                                                            "flags": 259,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 401
                                                        },
                                                        "flags": 258,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 402
                                                    },
                                                    "flags": 257,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 403
                                                },
                                                "flags": 256,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 404
                                            },
                                            "flags": 255,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 405
                                        },
                                        "flags": 254,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 406
                                    },
                                    "flags": 253,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 407
                                },
                                "flags": 252,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 408
                            },
                            "flags": 251,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 409
                        },
                        "flags": 250,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 410
                    },
                    "flags": 249,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 411
                },
                "flags": 246,
                "transformFlags": 0,
                "start": 33,
                "end": 412
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 246,
            "end": 413
        }
    ],
    "isModule": false,
    "source": "((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))));\n\n((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));\n\n((((((((((((((((((((((((((((((((((((((((a, ((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 413
}
```

### Printed

```javascript
(
  (
    (
      (
        (
          (
            (
              (
                (
                  (
                    (
                      (
                        (
                          (
                            (
                              (
                                (
                                  (
                                    (
                                      (
                                        (
                                          (
                                            (
                                              (
                                                (
                                                  (
                                                    (
                                                      (
                                                        (
                                                          (
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (
                                                                      (
                                                                        (
                                                                          (
                                                                            (
                                                                              (
                                                                                a
                                                                              )
                                                                            )
                                                                          )
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                              )
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);
(
  (
    (
      (
        (
          (
            (
              (
                (
                  (
                    (
                      (
                        (
                          (
                            (
                              (
                                (
                                  (
                                    (
                                      (
                                        (
                                          (
                                            (
                                              (
                                                (
                                                  (
                                                    (
                                                      (
                                                        (
                                                          (
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (
                                                                      (
                                                                        (
                                                                          (
                                                                            (
                                                                              (
                                                                                (
                                                                                  (
                                                                                    (
                                                                                      (
                                                                                        (
                                                                                          (
                                                                                            (
                                                                                              (
                                                                                                (
                                                                                                  (
                                                                                                    (
                                                                                                      (
                                                                                                        (
                                                                                                          (
                                                                                                            (
                                                                                                              (
                                                                                                                (
                                                                                                                  (
                                                                                                                    (
                                                                                                                      (
                                                                                                                        (
                                                                                                                          (
                                                                                                                            (
                                                                                                                              (
                                                                                                                                (
                                                                                                                                  (
                                                                                                                                    (
                                                                                                                                      (
                                                                                                                                        (
                                                                                                                                          (
                                                                                                                                            (
                                                                                                                                              (
                                                                                                                                                (
                                                                                                                                                  (
                                                                                                                                                    (
                                                                                                                                                      (
                                                                                                                                                        (
                                                                                                                                                          (
                                                                                                                                                            (
                                                                                                                                                              (
                                                                                                                                                                a
                                                                                                                                                              )
                                                                                                                                                            )
                                                                                                                                                          )
                                                                                                                                                        )
                                                                                                                                                      )
                                                                                                                                                    )
                                                                                                                                                  )
                                                                                                                                                )
                                                                                                                                              )
                                                                                                                                            )
                                                                                                                                          )
                                                                                                                                        )
                                                                                                                                      )
                                                                                                                                    )
                                                                                                                                  )
                                                                                                                                )
                                                                                                                              )
                                                                                                                            )
                                                                                                                          )
                                                                                                                        )
                                                                                                                      )
                                                                                                                    )
                                                                                                                  )
                                                                                                                )
                                                                                                              )
                                                                                                            )
                                                                                                          )
                                                                                                        )
                                                                                                      )
                                                                                                    )
                                                                                                  )
                                                                                                )
                                                                                              )
                                                                                            )
                                                                                          )
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  )
                                                                                )
                                                                              )
                                                                            )
                                                                          )
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                              )
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

(
  (
    (
      (
        (
          (
            (
              (
                (
                  (
                    (
                      (
                        (
                          (
                            (
                              (
                                (
                                  (
                                    (
                                      (
                                        (
                                          (
                                            (
                                              (
                                                (
                                                  (
                                                    (
                                                      (
                                                        (
                                                          (
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (
                                                                      (
                                                                        (
                                                                          (
                                                                            (
                                                                              (
                                                                                a,
                                                                                (
                                                                                  (
                                                                                    (
                                                                                      (
                                                                                        (
                                                                                          (
                                                                                            (
                                                                                              (
                                                                                                (
                                                                                                  (
                                                                                                    (
                                                                                                      (
                                                                                                        (
                                                                                                          (
                                                                                                            (
                                                                                                              (
                                                                                                                (
                                                                                                                  (
                                                                                                                    (
                                                                                                                      (
                                                                                                                        (
                                                                                                                          (
                                                                                                                            (
                                                                                                                              (
                                                                                                                                (
                                                                                                                                  (
                                                                                                                                    (
                                                                                                                                      (
                                                                                                                                        (
                                                                                                                                          (
                                                                                                                                            (
                                                                                                                                              (
                                                                                                                                                (
                                                                                                                                                  (
                                                                                                                                                    (
                                                                                                                                                      (
                                                                                                                                                        (
                                                                                                                                                          (
                                                                                                                                                            (
                                                                                                                                                              (
                                                                                                                                                                a
                                                                                                                                                              )
                                                                                                                                                            )
                                                                                                                                                          )
                                                                                                                                                        )
                                                                                                                                                      )
                                                                                                                                                    )
                                                                                                                                                  )
                                                                                                                                                )
                                                                                                                                              )
                                                                                                                                            )
                                                                                                                                          )
                                                                                                                                        )
                                                                                                                                      )
                                                                                                                                    )
                                                                                                                                  )
                                                                                                                                )
                                                                                                                              )
                                                                                                                            )
                                                                                                                          )
                                                                                                                        )
                                                                                                                      )
                                                                                                                    )
                                                                                                                  )
                                                                                                                )
                                                                                                              )
                                                                                                            )
                                                                                                          )
                                                                                                        )
                                                                                                      )
                                                                                                    )
                                                                                                  )
                                                                                                )
                                                                                              )
                                                                                            )
                                                                                          )
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  )
                                                                                )
                                                                              )
                                                                            )
                                                                          )
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                              )
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

```

### Diagnostics

```javascript
✔ No errors
```

