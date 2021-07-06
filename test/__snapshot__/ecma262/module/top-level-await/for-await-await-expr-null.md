# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var binding;

// [+Await]for await ( [lookahead ≠ let] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
for await (binding of [await null]) {
  await null;
  break;
}

// [+Await]for await ( var ForBinding[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
for await (var binding of [await null]) {
  await null;
  break;
}

// [+Await]for await ( ForDeclaration[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
for await (let binding of [await null]) {
  await null;
  break;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "binding",
                            "rawText": "binding",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 12,
                "end": 179
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "transformFlags": 0,
                "start": 179,
                "end": 185
            },
            "initializer": {
                "kind": 134299649,
                "text": "binding",
                "rawText": "binding",
                "flags": 96,
                "transformFlags": 0,
                "start": 187,
                "end": 194
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 194,
                "end": 197
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 204
                            },
                            "expression": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 204,
                                "end": 209
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 199,
                            "end": 209
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 199,
                    "end": 209
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 197,
                "end": 210
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 213,
                                    "end": 221
                                },
                                "expression": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 221,
                                    "end": 226
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 226
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 213,
                            "end": 227
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 227,
                                "end": 235
                            },
                            "label": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 236
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 213,
                    "end": 236
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 211,
                "end": 238
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 12,
            "end": 238
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 238,
                "end": 379
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "transformFlags": 0,
                "start": 379,
                "end": 385
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 387,
                    "end": 390
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "binding",
                                "rawText": "binding",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 390,
                                "end": 398
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 390,
                            "end": 398
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 390,
                    "end": 398
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 238,
                "end": 401
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 398,
                "end": 401
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 403,
                                "end": 408
                            },
                            "expression": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 408,
                                "end": 413
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 403,
                            "end": 413
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 403,
                    "end": 413
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 401,
                "end": 414
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 417,
                                    "end": 425
                                },
                                "expression": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 425,
                                    "end": 430
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 417,
                                "end": 430
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 417,
                            "end": 431
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 431,
                                "end": 439
                            },
                            "label": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 431,
                            "end": 440
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 417,
                    "end": 440
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 415,
                "end": 442
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 238,
            "end": 442
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 442,
                "end": 583
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "transformFlags": 0,
                "start": 583,
                "end": 589
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 442,
                    "end": 594
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "binding",
                                "rawText": "binding",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 594,
                                "end": 602
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 594,
                            "end": 602
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 594,
                    "end": 602
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 442,
                "end": 602
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 602,
                "end": 605
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 607,
                                "end": 612
                            },
                            "expression": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 612,
                                "end": 617
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 607,
                            "end": 617
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 607,
                    "end": 617
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 605,
                "end": 618
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 621,
                                    "end": 629
                                },
                                "expression": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 629,
                                    "end": 634
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 621,
                                "end": 634
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 621,
                            "end": 635
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 635,
                                "end": 643
                            },
                            "label": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 635,
                            "end": 644
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 621,
                    "end": 644
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 619,
                "end": 646
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 442,
            "end": 646
        }
    ],
    "isModule": true,
    "source": "var binding;\n\n// [+Await]for await ( [lookahead ≠ let] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]\nfor await (binding of [await null]) {\n  await null;\n  break;\n}\n\n// [+Await]for await ( var ForBinding[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]\nfor await (var binding of [await null]) {\n  await null;\n  break;\n}\n\n// [+Await]for await ( ForDeclaration[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]\nfor await (let binding of [await null]) {\n  await null;\n  break;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 646
}
```

### Printed

```javascript

var binding;
for await (binding of [await null]) {
    await null;
    break ;
  }

for await (var binding of [await null]) {
    await null;
    break ;
  }

for await (let binding of [await null]) {
    await null;
    break ;
  }

```

### Diagnostics

```javascript
✔ No errors
```

