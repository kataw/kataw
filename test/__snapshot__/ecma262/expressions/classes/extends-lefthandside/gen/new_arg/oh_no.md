# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/new_arg
> :: test: new arg
> :: case: oh,no
## Options

`````js
{}
`````
## Input

`````js
new oh,no
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "start": 0,
                            "end": 3
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "oh",
                            "rawText": "oh",
                            "flags": 96,
                            "start": 3,
                            "end": 6
                        },
                        "argumentList": null,
                        "flags": 96,
                        "start": 0,
                        "end": 6
                    },
                    {
                        "kind": 134299649,
                        "text": "no",
                        "rawText": "no",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "new oh,no",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

  new oh, no;

```

### Diagnostics

```javascript
✔ No errors
```

