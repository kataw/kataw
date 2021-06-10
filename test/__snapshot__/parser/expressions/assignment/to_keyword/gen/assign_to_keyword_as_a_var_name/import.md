# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: import
## Input

`````js
import = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 80,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "flags": 16,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "import = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `import` keyword can only be used with the module goal - start: 0, end: 8
✖ Declaration or statement expected - start: 6, end: 8
✖ Expected a `;` - start: 6, end: 8

```

