# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: this
## Input

`````js
new this
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
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 4276321,
                    "flags": 96,
                    "start": 3,
                    "end": 8
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "new this",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

new  this();
```

### Diagnostics

```javascript
✔ No errors
```

