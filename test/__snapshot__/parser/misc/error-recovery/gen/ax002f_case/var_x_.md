# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/error-recovery/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\error-recovery\gen\ax002f_case
> :: test: a/ case
> :: case: var x;
## Input

`````js
var x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "var x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

var ;
```

### Diagnostics

```javascript
✔ No errors
```

