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
                                                                                                                                                                            "flags": 32,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 39,
                                                                                                                                                                            "end": 42
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 32,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 38,
                                                                                                                                                                        "end": 43
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 32,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 37,
                                                                                                                                                                    "end": 44
                                                                                                                                                                },
                                                                                                                                                                "flags": 32,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 36,
                                                                                                                                                                "end": 45
                                                                                                                                                            },
                                                                                                                                                            "flags": 32,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 35,
                                                                                                                                                            "end": 46
                                                                                                                                                        },
                                                                                                                                                        "flags": 32,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 34,
                                                                                                                                                        "end": 47
                                                                                                                                                    },
                                                                                                                                                    "flags": 32,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 33,
                                                                                                                                                    "end": 48
                                                                                                                                                },
                                                                                                                                                "flags": 32,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 32,
                                                                                                                                                "end": 49
                                                                                                                                            },
                                                                                                                                            "flags": 32,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 31,
                                                                                                                                            "end": 50
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 30,
                                                                                                                                        "end": 51
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 29,
                                                                                                                                    "end": 52
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 28,
                                                                                                                                "end": 53
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 27,
                                                                                                                            "end": 54
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 26,
                                                                                                                        "end": 55
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 25,
                                                                                                                    "end": 56
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 24,
                                                                                                                "end": 57
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 23,
                                                                                                            "end": 58
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 22,
                                                                                                        "end": 59
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 21,
                                                                                                    "end": 60
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 20,
                                                                                                "end": 61
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 19,
                                                                                            "end": 62
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 18,
                                                                                        "end": 63
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 17,
                                                                                    "end": 64
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 16,
                                                                                "end": 65
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 15,
                                                                            "end": 66
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 14,
                                                                        "end": 67
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 13,
                                                                    "end": 68
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 12,
                                                                "end": 69
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 70
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 71
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 72
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 73
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 74
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 76
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 77
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 78
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 79
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 80
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
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
                                                                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                            "start": 163,
                                                                                                                                                                                                                                                                                                                                            "end": 166
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                        "start": 162,
                                                                                                                                                                                                                                                                                                                                        "end": 167
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                    "start": 161,
                                                                                                                                                                                                                                                                                                                                    "end": 168
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                "start": 160,
                                                                                                                                                                                                                                                                                                                                "end": 169
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                            "start": 159,
                                                                                                                                                                                                                                                                                                                            "end": 170
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                        "start": 158,
                                                                                                                                                                                                                                                                                                                        "end": 171
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                    "start": 157,
                                                                                                                                                                                                                                                                                                                    "end": 172
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                "start": 156,
                                                                                                                                                                                                                                                                                                                "end": 173
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                            "start": 155,
                                                                                                                                                                                                                                                                                                            "end": 174
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                        "start": 154,
                                                                                                                                                                                                                                                                                                        "end": 175
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                    "start": 153,
                                                                                                                                                                                                                                                                                                    "end": 176
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 152,
                                                                                                                                                                                                                                                                                                "end": 177
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                            "start": 151,
                                                                                                                                                                                                                                                                                            "end": 178
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                        "start": 150,
                                                                                                                                                                                                                                                                                        "end": 179
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                    "start": 149,
                                                                                                                                                                                                                                                                                    "end": 180
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                "start": 148,
                                                                                                                                                                                                                                                                                "end": 181
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                            "start": 147,
                                                                                                                                                                                                                                                                            "end": 182
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                        "start": 146,
                                                                                                                                                                                                                                                                        "end": 183
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                    "start": 145,
                                                                                                                                                                                                                                                                    "end": 184
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                "start": 144,
                                                                                                                                                                                                                                                                "end": 185
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                            "start": 143,
                                                                                                                                                                                                                                                            "end": 186
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                        "start": 142,
                                                                                                                                                                                                                                                        "end": 187
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                    "start": 141,
                                                                                                                                                                                                                                                    "end": 188
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                "start": 140,
                                                                                                                                                                                                                                                "end": 189
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                            "start": 139,
                                                                                                                                                                                                                                            "end": 190
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                        "start": 138,
                                                                                                                                                                                                                                        "end": 191
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                    "start": 137,
                                                                                                                                                                                                                                    "end": 192
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                "start": 136,
                                                                                                                                                                                                                                "end": 193
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                            "start": 135,
                                                                                                                                                                                                                            "end": 194
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                        "start": 134,
                                                                                                                                                                                                                        "end": 195
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                    "start": 133,
                                                                                                                                                                                                                    "end": 196
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                "start": 132,
                                                                                                                                                                                                                "end": 197
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                            "start": 131,
                                                                                                                                                                                                            "end": 198
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                        "start": 130,
                                                                                                                                                                                                        "end": 199
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                    "start": 129,
                                                                                                                                                                                                    "end": 200
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                "start": 128,
                                                                                                                                                                                                "end": 201
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 127,
                                                                                                                                                                                            "end": 202
                                                                                                                                                                                        },
                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                        "start": 126,
                                                                                                                                                                                        "end": 203
                                                                                                                                                                                    },
                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                    "start": 125,
                                                                                                                                                                                    "end": 204
                                                                                                                                                                                },
                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                "start": 124,
                                                                                                                                                                                "end": 205
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 32,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 123,
                                                                                                                                                                            "end": 206
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 32,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 122,
                                                                                                                                                                        "end": 207
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 32,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 121,
                                                                                                                                                                    "end": 208
                                                                                                                                                                },
                                                                                                                                                                "flags": 32,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 120,
                                                                                                                                                                "end": 209
                                                                                                                                                            },
                                                                                                                                                            "flags": 32,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 119,
                                                                                                                                                            "end": 210
                                                                                                                                                        },
                                                                                                                                                        "flags": 32,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 118,
                                                                                                                                                        "end": 211
                                                                                                                                                    },
                                                                                                                                                    "flags": 32,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 117,
                                                                                                                                                    "end": 212
                                                                                                                                                },
                                                                                                                                                "flags": 32,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 116,
                                                                                                                                                "end": 213
                                                                                                                                            },
                                                                                                                                            "flags": 32,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 115,
                                                                                                                                            "end": 214
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 114,
                                                                                                                                        "end": 215
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 113,
                                                                                                                                    "end": 216
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 112,
                                                                                                                                "end": 217
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 111,
                                                                                                                            "end": 218
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 110,
                                                                                                                        "end": 219
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 109,
                                                                                                                    "end": 220
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 108,
                                                                                                                "end": 221
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 107,
                                                                                                            "end": 222
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 106,
                                                                                                        "end": 223
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 105,
                                                                                                    "end": 224
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 104,
                                                                                                "end": 225
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 103,
                                                                                            "end": 226
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 102,
                                                                                        "end": 227
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 101,
                                                                                    "end": 228
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 100,
                                                                                "end": 229
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 99,
                                                                            "end": 230
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 98,
                                                                        "end": 231
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 97,
                                                                    "end": 232
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 96,
                                                                "end": 233
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 95,
                                                            "end": 234
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 94,
                                                        "end": 235
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 93,
                                                    "end": 236
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 92,
                                                "end": 237
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 238
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 90,
                                        "end": 239
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 240
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 241
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 242
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 243
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 244
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 82,
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
                                                                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                                    "start": 330,
                                                                                                                                                                                                                                                                                                                                                    "end": 333
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                                "start": 329,
                                                                                                                                                                                                                                                                                                                                                "end": 334
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                            "start": 328,
                                                                                                                                                                                                                                                                                                                                            "end": 335
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                        "start": 327,
                                                                                                                                                                                                                                                                                                                                        "end": 336
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                    "start": 326,
                                                                                                                                                                                                                                                                                                                                    "end": 337
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                                "start": 325,
                                                                                                                                                                                                                                                                                                                                "end": 338
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                            "start": 324,
                                                                                                                                                                                                                                                                                                                            "end": 339
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                        "start": 323,
                                                                                                                                                                                                                                                                                                                        "end": 340
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                    "start": 322,
                                                                                                                                                                                                                                                                                                                    "end": 341
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                                "start": 321,
                                                                                                                                                                                                                                                                                                                "end": 342
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                                            "start": 320,
                                                                                                                                                                                                                                                                                                            "end": 343
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                                        "start": 319,
                                                                                                                                                                                                                                                                                                        "end": 344
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                                    "start": 318,
                                                                                                                                                                                                                                                                                                    "end": 345
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 317,
                                                                                                                                                                                                                                                                                                "end": 346
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                                            "start": 316,
                                                                                                                                                                                                                                                                                            "end": 347
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                        "start": 315,
                                                                                                                                                                                                                                                                                        "end": 348
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                                    "start": 314,
                                                                                                                                                                                                                                                                                    "end": 349
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                "start": 313,
                                                                                                                                                                                                                                                                                "end": 350
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                            "start": 312,
                                                                                                                                                                                                                                                                            "end": 351
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                        "start": 311,
                                                                                                                                                                                                                                                                        "end": 352
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                    "start": 310,
                                                                                                                                                                                                                                                                    "end": 353
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                "start": 309,
                                                                                                                                                                                                                                                                "end": 354
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                            "start": 308,
                                                                                                                                                                                                                                                            "end": 355
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                        "start": 307,
                                                                                                                                                                                                                                                        "end": 356
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                    "start": 306,
                                                                                                                                                                                                                                                    "end": 357
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                "start": 305,
                                                                                                                                                                                                                                                "end": 358
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                            "start": 304,
                                                                                                                                                                                                                                            "end": 359
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                        "start": 303,
                                                                                                                                                                                                                                        "end": 360
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                    "start": 302,
                                                                                                                                                                                                                                    "end": 361
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                "start": 301,
                                                                                                                                                                                                                                "end": 362
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                            "start": 300,
                                                                                                                                                                                                                            "end": 363
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                        "start": 299,
                                                                                                                                                                                                                        "end": 364
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                    "start": 298,
                                                                                                                                                                                                                    "end": 365
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                "start": 297,
                                                                                                                                                                                                                "end": 366
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                            "start": 296,
                                                                                                                                                                                                            "end": 367
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                        "start": 295,
                                                                                                                                                                                                        "end": 368
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                    "start": 294,
                                                                                                                                                                                                    "end": 369
                                                                                                                                                                                                },
                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                "start": 293,
                                                                                                                                                                                                "end": 370
                                                                                                                                                                                            },
                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 292,
                                                                                                                                                                                            "end": 371
                                                                                                                                                                                        },
                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                        "start": 290,
                                                                                                                                                                                        "end": 372
                                                                                                                                                                                    }
                                                                                                                                                                                ],
                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                "transformFlags": 1024,
                                                                                                                                                                                "start": 287,
                                                                                                                                                                                "end": 372
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 32,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 287,
                                                                                                                                                                            "end": 373
                                                                                                                                                                        },
                                                                                                                                                                        "flags": 32,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 286,
                                                                                                                                                                        "end": 374
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 32,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 285,
                                                                                                                                                                    "end": 375
                                                                                                                                                                },
                                                                                                                                                                "flags": 32,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 284,
                                                                                                                                                                "end": 376
                                                                                                                                                            },
                                                                                                                                                            "flags": 32,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 283,
                                                                                                                                                            "end": 377
                                                                                                                                                        },
                                                                                                                                                        "flags": 32,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 282,
                                                                                                                                                        "end": 378
                                                                                                                                                    },
                                                                                                                                                    "flags": 32,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 281,
                                                                                                                                                    "end": 379
                                                                                                                                                },
                                                                                                                                                "flags": 32,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 280,
                                                                                                                                                "end": 380
                                                                                                                                            },
                                                                                                                                            "flags": 32,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 279,
                                                                                                                                            "end": 381
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 278,
                                                                                                                                        "end": 382
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 277,
                                                                                                                                    "end": 383
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 276,
                                                                                                                                "end": 384
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 275,
                                                                                                                            "end": 385
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 274,
                                                                                                                        "end": 386
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 273,
                                                                                                                    "end": 387
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 272,
                                                                                                                "end": 388
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 271,
                                                                                                            "end": 389
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 270,
                                                                                                        "end": 390
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 269,
                                                                                                    "end": 391
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 268,
                                                                                                "end": 392
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 267,
                                                                                            "end": 393
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 266,
                                                                                        "end": 394
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 265,
                                                                                    "end": 395
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 264,
                                                                                "end": 396
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 263,
                                                                            "end": 397
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 262,
                                                                        "end": 398
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 261,
                                                                    "end": 399
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 260,
                                                                "end": 400
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 259,
                                                            "end": 401
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 258,
                                                        "end": 402
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 257,
                                                    "end": 403
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 256,
                                                "end": 404
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 255,
                                            "end": 405
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 406
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 253,
                                    "end": 407
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 252,
                                "end": 408
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 251,
                            "end": 409
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 250,
                        "end": 410
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 249,
                    "end": 411
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 246,
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

