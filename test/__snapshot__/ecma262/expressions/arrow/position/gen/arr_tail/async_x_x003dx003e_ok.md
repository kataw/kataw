# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/arr_tail
> :: test: arr tail
> :: case: async x => ok
## Options

`````js
{}
`````
## Input

`````js
[async x => ok].x
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
                "kind": 129,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 11
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 288,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "[async x => ok].x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
[async x => ok].x;
```

### Diagnostics

```javascript
✔ No errors
```

