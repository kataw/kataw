# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: new.target
## Input

`````js
class A extends new.target {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 211,
                    "targetKeyword": {
                        "kind": 16594,
                        "flags": 0,
                        "start": 20,
                        "end": 26
                    },
                    "flags": 96,
                    "start": 15,
                    "end": 26
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 26
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 28,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "class A extends new.target {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 26, end: 28

```

