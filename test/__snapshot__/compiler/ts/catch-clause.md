# Kataw parser test case

## Input

`````js
try {} catch (ex) {}
try {} catch (ex: unknown) {}
try {} catch (ex: any) {}

// The following can't be error'd at parse time
try {} catch (ex: A) {}
try {} catch (ex: Error) {}
try {} catch (ex: string) {}
try {} catch (ex: string | number) {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {} catch (ex) {}\ntry {} catch (ex: unknown) {}\ntry {} catch (ex: any) {}\n\n// The following can't be error'd at parse time\ntry {} catch (ex: A) {}\ntry {} catch (ex: Error) {}\ntry {} catch (ex: string) {}\ntry {} catch (ex: string | number) {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 6
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 20
                },
                "finallyBlock": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 27
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 35,
                            "end": 37
                        },
                        "type": {
                            "kind": 4202738,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 46
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 46
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 49
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 50
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 50
                },
                "finallyBlock": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 50
            },
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 56
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 57
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 65,
                            "end": 67
                        },
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 68,
                            "end": 72
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 72
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 75
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 73,
                        "end": 76
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 76
                },
                "finallyBlock": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 50,
                "end": 76
            },
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 131,
                        "end": 131
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 132
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 140,
                            "end": 142
                        },
                        "type": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 145
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 143,
                            "end": 146
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 140,
                        "end": 145
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 148
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 146,
                        "end": 149
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 149
                },
                "finallyBlock": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 76,
                "end": 149
            },
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 155
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 153,
                    "end": 156
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 164,
                            "end": 166
                        },
                        "type": {
                            "kind": 8428,
                            "typeName": {
                                "kind": 196711,
                                "text": "Error",
                                "rawText": "Error",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 173
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 167,
                            "end": 174
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 164,
                        "end": 173
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 176,
                            "end": 176
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 174,
                        "end": 177
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 177
                },
                "finallyBlock": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 149,
                "end": 177
            },
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 183,
                        "end": 183
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 181,
                    "end": 184
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 192,
                            "end": 194
                        },
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 195,
                            "end": 202
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 192,
                        "end": 202
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 205
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 203,
                        "end": 206
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 184,
                    "end": 206
                },
                "finallyBlock": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 177,
                "end": 206
            },
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 212
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 210,
                    "end": 213
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "ex",
                            "rawText": "ex",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 221,
                            "end": 223
                        },
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 224,
                                    "end": 231
                                },
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 233,
                                    "end": 240
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 231,
                            "end": 240
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 221,
                        "end": 240
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 243,
                            "end": 243
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 244
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 213,
                    "end": 244
                },
                "finallyBlock": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 206,
                "end": 244
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 244
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 244
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

