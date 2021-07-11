# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_stand_alone
> :: test: do stand alone
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
do false
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 205586437,
                    "flags": 96,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 8,
                "end": 8
            },
            "flags": 80,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "do false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 3, end: 8

```

