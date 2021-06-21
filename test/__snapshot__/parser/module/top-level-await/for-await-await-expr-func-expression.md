# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var binding;

// [+Await]for await ( [lookahead ≠ let] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
for await (binding of [await function() {}]) {
  await function() {};
  break;
}

// [+Await]for await ( var ForBinding[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
for await (var binding of [await function() {}]) {
  await function() {};
  break;
}

// [+Await]for await ( ForDeclaration[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
for await (let binding of [await function() {}]) {
  await function() {};
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
                            "start": 3,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 12,
                "end": 179
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "start": 179,
                "end": 185
            },
            "initializer": {
                "kind": 134299649,
                "text": "binding",
                "rawText": "binding",
                "flags": 96,
                "start": 187,
                "end": 194
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
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
                                "start": 199,
                                "end": 204
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 204,
                                    "end": 213
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 213,
                                    "end": 215
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 217,
                                        "end": 217
                                    },
                                    "flags": 32,
                                    "start": 215,
                                    "end": 218
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 204,
                                "end": 218
                            },
                            "flags": 32,
                            "start": 199,
                            "end": 218
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 199,
                    "end": 218
                },
                "flags": 32,
                "start": 197,
                "end": 219
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
                                    "start": 222,
                                    "end": 230
                                },
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 230,
                                        "end": 239
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 239,
                                        "end": 241
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 243,
                                            "end": 243
                                        },
                                        "flags": 32,
                                        "start": 241,
                                        "end": 244
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 230,
                                    "end": 244
                                },
                                "flags": 32,
                                "start": 222,
                                "end": 244
                            },
                            "flags": 16,
                            "start": 222,
                            "end": 245
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "start": 245,
                                "end": 253
                            },
                            "label": null,
                            "flags": 16,
                            "start": 245,
                            "end": 254
                        }
                    ],
                    "flags": 17,
                    "start": 222,
                    "end": 254
                },
                "flags": 16,
                "start": 220,
                "end": 256
            },
            "flags": 81,
            "start": 12,
            "end": 256
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 256,
                "end": 397
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "start": 397,
                "end": 403
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "start": 405,
                    "end": 408
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
                                "start": 408,
                                "end": 416
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 408,
                            "end": 416
                        }
                    ],
                    "flags": 16,
                    "start": 408,
                    "end": 416
                },
                "flags": 16,
                "start": 256,
                "end": 419
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 416,
                "end": 419
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
                                "start": 421,
                                "end": 426
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 426,
                                    "end": 435
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 435,
                                    "end": 437
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 439,
                                        "end": 439
                                    },
                                    "flags": 32,
                                    "start": 437,
                                    "end": 440
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 426,
                                "end": 440
                            },
                            "flags": 32,
                            "start": 421,
                            "end": 440
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 421,
                    "end": 440
                },
                "flags": 32,
                "start": 419,
                "end": 441
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
                                    "start": 444,
                                    "end": 452
                                },
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 452,
                                        "end": 461
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 461,
                                        "end": 463
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 465,
                                            "end": 465
                                        },
                                        "flags": 32,
                                        "start": 463,
                                        "end": 466
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 452,
                                    "end": 466
                                },
                                "flags": 32,
                                "start": 444,
                                "end": 466
                            },
                            "flags": 16,
                            "start": 444,
                            "end": 467
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "start": 467,
                                "end": 475
                            },
                            "label": null,
                            "flags": 16,
                            "start": 467,
                            "end": 476
                        }
                    ],
                    "flags": 17,
                    "start": 444,
                    "end": 476
                },
                "flags": 16,
                "start": 442,
                "end": 478
            },
            "flags": 81,
            "start": 256,
            "end": 478
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 478,
                "end": 619
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "start": 619,
                "end": 625
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 478,
                    "end": 630
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
                                "start": 630,
                                "end": 638
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 630,
                            "end": 638
                        }
                    ],
                    "flags": 16,
                    "start": 630,
                    "end": 638
                },
                "flags": 33554448,
                "start": 478,
                "end": 638
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 638,
                "end": 641
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
                                "start": 643,
                                "end": 648
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 648,
                                    "end": 657
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 657,
                                    "end": 659
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 661,
                                        "end": 661
                                    },
                                    "flags": 32,
                                    "start": 659,
                                    "end": 662
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 648,
                                "end": 662
                            },
                            "flags": 32,
                            "start": 643,
                            "end": 662
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 643,
                    "end": 662
                },
                "flags": 32,
                "start": 641,
                "end": 663
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
                                    "start": 666,
                                    "end": 674
                                },
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 674,
                                        "end": 683
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 683,
                                        "end": 685
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 687,
                                            "end": 687
                                        },
                                        "flags": 32,
                                        "start": 685,
                                        "end": 688
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 674,
                                    "end": 688
                                },
                                "flags": 32,
                                "start": 666,
                                "end": 688
                            },
                            "flags": 16,
                            "start": 666,
                            "end": 689
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "start": 689,
                                "end": 697
                            },
                            "label": null,
                            "flags": 16,
                            "start": 689,
                            "end": 698
                        }
                    ],
                    "flags": 17,
                    "start": 666,
                    "end": 698
                },
                "flags": 16,
                "start": 664,
                "end": 700
            },
            "flags": 81,
            "start": 478,
            "end": 700
        }
    ],
    "isModule": true,
    "source": "var binding;\n\n// [+Await]for await ( [lookahead ≠ let] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]\nfor await (binding of [await function() {}]) {\n  await function() {};\n  break;\n}\n\n// [+Await]for await ( var ForBinding[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]\nfor await (var binding of [await function() {}]) {\n  await function() {};\n  break;\n}\n\n// [+Await]for await ( ForDeclaration[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]\nfor await (let binding of [await function() {}]) {\n  await function() {};\n  break;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 700
}
```

### Printed

```javascript

 var binding;, for await(binding of [await function () {
    }]) { await function () {
};, break; }, for await(var binding of [await function () {
    }]) { await function () {
};, break; }, for await(let binding of [await function () {
    }]) { await function () {
};, break; } 
```

### Diagnostics

```javascript
✔ No errors
```

