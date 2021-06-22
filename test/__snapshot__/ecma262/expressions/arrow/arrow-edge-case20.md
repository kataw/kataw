# Kataw parser test case

## Input

`````js
 let icecream = what == "cone"
   ? p => (!!p ? `here's your ${p} cone` : `just the empty cone for you`)
   : p => `here's your ${p} ${what}`;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "icecream",
                            "rawText": "icecream",
                            "flags": 96,
                            "start": 4,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "what",
                                    "rawText": "what",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "start": 20,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "cone",
                                    "rawText": "\"cone\"",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 30
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 30,
                                "end": 35
                            },
                            "consequent": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 37
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 96,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "operand": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 44
                                                },
                                                "operand": {
                                                    "kind": 134299649,
                                                    "text": "p",
                                                    "rawText": "p",
                                                    "flags": 96,
                                                    "start": 44,
                                                    "end": 45
                                                },
                                                "flags": 32,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "flags": 32,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 45,
                                            "end": 47
                                        },
                                        "consequent": {
                                            "kind": 227,
                                            "spans": [
                                                {
                                                    "kind": 65764,
                                                    "rawText": "here's your ",
                                                    "text": "here's your ",
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "p",
                                                        "rawText": "p",
                                                        "flags": 96,
                                                        "start": 63,
                                                        "end": 64
                                                    },
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 64
                                                }
                                            ],
                                            "tail": {
                                                "kind": 458761,
                                                "text": " cone",
                                                "rawText": " cone",
                                                "flags": 96,
                                                "start": 64,
                                                "end": 71
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 71
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 71,
                                            "end": 73
                                        },
                                        "alternate": {
                                            "kind": 458761,
                                            "text": "just the empty cone for you",
                                            "rawText": "just the empty cone for you",
                                            "flags": 134217824,
                                            "start": 73,
                                            "end": 103
                                        },
                                        "flags": 32,
                                        "start": 42,
                                        "end": 103
                                    },
                                    "flags": 32,
                                    "start": 40,
                                    "end": 104
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 104
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 104,
                                "end": 109
                            },
                            "alternate": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 109,
                                    "end": 111
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 111,
                                    "end": 114
                                },
                                "contents": {
                                    "kind": 227,
                                    "spans": [
                                        {
                                            "kind": 65764,
                                            "rawText": "here's your ",
                                            "text": "here's your ",
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 96,
                                                "start": 130,
                                                "end": 131
                                            },
                                            "flags": 32,
                                            "start": 114,
                                            "end": 131
                                        },
                                        {
                                            "kind": 65764,
                                            "rawText": " ",
                                            "text": " ",
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "what",
                                                "rawText": "what",
                                                "flags": 96,
                                                "start": 135,
                                                "end": 139
                                            },
                                            "flags": 32,
                                            "start": 131,
                                            "end": 139
                                        }
                                    ],
                                    "tail": {
                                        "kind": 458761,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 96,
                                        "start": 139,
                                        "end": 141
                                    },
                                    "flags": 32,
                                    "start": 114,
                                    "end": 141
                                },
                                "flags": 32,
                                "start": 109,
                                "end": 141
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 141
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 141
                    }
                ],
                "flags": 16,
                "start": 4,
                "end": 141
            },
            "flags": 33554448,
            "start": 0,
            "end": 142
        }
    ],
    "isModule": false,
    "source": " let icecream = what == \"cone\"\n   ? p => (!!p ? `here's your ${p} cone` : `just the empty cone for you`)\n   : p => `here's your ${p} ${what}`;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 142
}
```

### Printed

```javascript

let icecream =
  what == "\"cone\""
    ? p =>  (!!p ? `here's your ${p} cone` : `just the empty cone for you`)
    : p =>  `here's your ${p} ${what}`;
```

### Diagnostics

```javascript
✔ No errors
```

