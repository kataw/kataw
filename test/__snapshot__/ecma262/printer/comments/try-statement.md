# Kataw parser test case

## Input

`````js
/*1*/ try /*2*/ { /*3*/
    /*4*/ throw /*5*/ "no" /*6*/;
/*7*/} /*8*/ catch /*9*/ ( /*10*/ e /*11*/ ) /*12*/ { /*13*/

/*14*/} /*15*/ finally /*16*/ { /*17*/

/*18*/} /*19*/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 9
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 81,
                                "start": 17,
                                "end": 39
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "no",
                                "rawText": "\"no\"",
                                "flags": 96,
                                "start": 39,
                                "end": 50
                            },
                            "flags": 81,
                            "start": 17,
                            "end": 57
                        }
                    ],
                    "flags": 17,
                    "start": 17,
                    "end": 57
                },
                "flags": 16,
                "start": 9,
                "end": 64
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 64,
                    "end": 76
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 84,
                    "end": 93
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "start": 111,
                        "end": 111
                    },
                    "flags": 16,
                    "start": 102,
                    "end": 127
                },
                "flags": 80,
                "start": 64,
                "end": 127
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 127,
                "end": 142
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 151,
                    "end": 151
                },
                "flags": 16,
                "start": 142,
                "end": 167
            },
            "flags": 16,
            "start": 0,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "/*1*/ try /*2*/ { /*3*/\n    /*4*/ throw /*5*/ \"no\" /*6*/;\n/*7*/} /*8*/ catch /*9*/ ( /*10*/ e /*11*/ ) /*12*/ { /*13*/\n\n/*14*/} /*15*/ finally /*16*/ { /*17*/\n\n/*18*/} /*19*/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 174
}
```

### Printed

```javascript

try {
  throw "\"no\"";
} catch (e) {} finally {}
```

### Diagnostics

```javascript
✔ No errors
```

