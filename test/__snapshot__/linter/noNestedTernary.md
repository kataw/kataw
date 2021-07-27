# Kataw parser test case

## Input

`````js
	let x = foo ? bar : baz === qux ? quxx : foobar;

  let y = foo ? bar ? boo : foo : baz ? boo : foo;

	foo ? baz === qux ? quxx() : foobar() : bar();
`````

## Options

### Parser Options

`````js
{ lint: { noNestedTernary: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "baz",
                                        "rawText": "baz",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 24,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "qux",
                                        "rawText": "qux",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 32
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 20,
                                    "end": 32
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 34
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "quxx",
                                    "rawText": "quxx",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 39
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 41
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "foobar",
                                    "rawText": "foobar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 48
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 20,
                                "end": 48
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 8,
                            "end": 48
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 4,
                        "end": 48
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 4,
                "end": 48
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 49,
                "end": 56
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 58
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 64
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 66
                            },
                            "consequent": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 70
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 72
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "boo",
                                    "rawText": "boo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 76
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 78
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 82
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 66,
                                "end": 82
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 84
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 88
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "boo",
                                    "rawText": "boo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 94
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 96
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 96,
                                    "end": 100
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 84,
                                "end": 100
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 60,
                            "end": 100
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 56,
                        "end": 100
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 56,
                "end": 100
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 49,
            "end": 101
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 107
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 109
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 109,
                            "end": 113
                        },
                        "operatorToken": {
                            "kind": 34620,
                            "flags": 96,
                            "transformFlags": 16,
                            "start": 113,
                            "end": 117
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "qux",
                            "rawText": "qux",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 117,
                            "end": 121
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 109,
                        "end": 121
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 121,
                        "end": 123
                    },
                    "consequent": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "quxx",
                            "rawText": "quxx",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 128
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 129,
                            "end": 129
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 123,
                        "end": 130
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 130,
                        "end": 132
                    },
                    "alternate": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foobar",
                            "rawText": "foobar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 139
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 140
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 132,
                        "end": 141
                    },
                    "flags": 96,
                    "transformFlags": 4096,
                    "start": 109,
                    "end": 141
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 143
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 143,
                        "end": 147
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 148
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 143,
                    "end": 149
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 101,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 101,
            "end": 150
        }
    ],
    "isModule": false,
    "source": "\tlet x = foo ? bar : baz === qux ? quxx : foobar;\n\n  let y = foo ? bar ? boo : foo : baz ? boo : foo;\n\n\tfoo ? baz === qux ? quxx() : foobar() : bar();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 150
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Do not nest ternary expressions - start: 48, end: 49
✖ Do not nest ternary expressions - start: 82, end: 84
✖ Do not nest ternary expressions - start: 100, end: 101
✖ Do not nest ternary expressions - start: 141, end: 143

```

