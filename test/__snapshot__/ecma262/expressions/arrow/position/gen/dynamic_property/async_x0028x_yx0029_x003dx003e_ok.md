# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/dynamic_property
> :: test: dynamic property
> :: case: async (x, y) => ok
## Options

`````js
{}
`````
## Input

`````js
async (x, y) => ok[foo]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 7,
                "end": 12
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "contents": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 96,
                    "start": 15,
                    "end": 18
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 19,
                    "end": 22
                },
                "flags": 536870944,
                "start": 15,
                "end": 23
            },
            "flags": 288,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "async (x, y) => ok[foo]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

async (x, y) => ok[foo]
```

### Diagnostics

```javascript
✔ No errors
```

