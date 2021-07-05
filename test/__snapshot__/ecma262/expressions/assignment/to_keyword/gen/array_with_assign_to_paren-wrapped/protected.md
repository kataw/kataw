# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/array_with_assign_to_paren-wrapped
> :: test: array with assign to paren-wrapped
> :: case: protected
## Options

`````js
{}
`````
## Input

`````js
async x => (protected) = 1
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "protected",
                            "rawText": "protected",
                            "flags": 96,
                            "start": 12,
                            "end": 21
                        },
                        "flags": 10,
                        "start": 32,
                        "end": 22
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 22,
                        "end": 24
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "flags": 0,
                    "start": 10,
                    "end": 26
                },
                "flags": 288,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "async x => (protected) = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

async x => (protected) = 1;
```

### Diagnostics

```javascript
✔ No errors
```

