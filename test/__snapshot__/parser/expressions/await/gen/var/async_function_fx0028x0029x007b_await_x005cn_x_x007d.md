# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f(){ await \n x; }
## Input

`````js
var await; var f = (async function() { async function f(){ await \n x; } });
`````

## Output

### Hybrid CST

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
                "flags": 0,
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
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 10,
                "start": 0,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 18,
                                "end": 64
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 64
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 64
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 64
            },
            "flags": 128,
            "start": 10,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 66,
                "end": 67
            },
            "flags": 128,
            "start": 66,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 67,
                "end": 69
            },
            "flags": 128,
            "start": 67,
            "end": 70
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 75,
            "end": 76
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function f(){ await \\n x; } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 64, end: 65
✖ Expression expected - start: 64, end: 66
✖ ',' expected - start: 64, end: 66
✖ Statement expected - start: 64, end: 66
✖ Statement expected - start: 70, end: 72
✖ Statement expected - start: 72, end: 74
✖ Statement expected - start: 74, end: 75

```

