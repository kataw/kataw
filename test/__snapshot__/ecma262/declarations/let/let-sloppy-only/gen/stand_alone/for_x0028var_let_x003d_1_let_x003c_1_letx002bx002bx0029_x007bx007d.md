# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/let-sloppy-only/gen/stand_alone
> :: test: stand alone
> :: case: for (var let = 1; let < 1; let++) {}
## Options

`````js
{}
`````
## Input

`````js
for (var let = 1; let < 1; let++) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 8
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 16
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 16
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 32
                },
                "operand": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 30
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 26,
                "end": 32
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 17,
                "end": 25
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 35
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 36
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "for (var let = 1; let < 1; let++) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
for (var let = 1; let++; let  < 1) {}
```

### Diagnostics

```javascript
✔ No errors
```

