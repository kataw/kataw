# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/new_arg
> :: test: new arg
> :: case: fooo`bar`
## Options

`````js
{}
`````
## Input

`````js
new fooo`bar`
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "fooo",
                        "rawText": "fooo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 8
                    },
                    "template": {
                        "kind": 458761,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "argumentList": null,
                "flags": 96,
                "transformFlags": 2048,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "new fooo`bar`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
new fooo`bar`;
```

### Diagnostics

```javascript
✔ No errors
```

