# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/dynamic_property
> :: test: dynamic property
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
async x => {}[foo]
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 13
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "async x => {}[foo]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Block body arrows can not be immediately invoked without a group - start: 13, end: 14

```

