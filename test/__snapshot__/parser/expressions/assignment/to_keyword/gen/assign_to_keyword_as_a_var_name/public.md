# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: public
## Options

`````js
{}
`````
## Input

`````js
public = x
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "public",
                    "rawText": "public",
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "public = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

public = x;
```

### Diagnostics

```javascript
✔ No errors
```

