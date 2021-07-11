# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/unicode-escape/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/unicode-escape/gen/simple
> :: test: simple
> :: case: var foob\\U1234r = 0;
## Options

`````js
{}
`````
## Input

`````js
var foob\\U1234r = 0;
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
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "U1234r",
                    "rawText": "U1234r",
                    "flags": 96,
                    "start": 10,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 32,
                "start": 10,
                "end": 20
            },
            "flags": 16,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "var foob\\\\U1234r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 3, end: 8
✖ Invalid hexadecimal escape sequence - start: 8, end: 8
✖ ',' expected - start: 8, end: 9
✖ Expected a `;` - start: 8, end: 9
✖ Invalid hexadecimal escape sequence - start: 9, end: 9
✖ Declaration or statement expected - start: 9, end: 10

```

