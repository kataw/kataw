# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: crazy input 1
## Options

`````js
{}
`````
## Input

`````js
{ crazy input 1
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "crazy",
                            "rawText": "crazy",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "input",
                            "rawText": "input",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ crazy input 1",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 13
✖ Expected a `;` - start: 13, end: 15

```

