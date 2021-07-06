# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/as_tag
> :: test: as tag
> :: case: x => ok
## Options

`````js
{}
`````
## Input

`````js
x => ok`foo`
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "contents": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 7
                    },
                    "template": {
                        "kind": 458761,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "x => ok`foo`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

x => ok`foo`;
```

### Diagnostics

```javascript
✔ No errors
```

