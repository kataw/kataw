# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/unicode-escape/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/unicode-escape/gen/simple
> :: test: simple
> :: case: var foob\\u{c481}r = 0;
## Options

`````js
{}
`````
## Input

`````js
var foob\\u{c481}r = 0;
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
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "쒁r",
                    "rawText": "\\u{c481}r",
                    "flags": 8288,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 9,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "var foob\\\\u{c481}r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
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

```

