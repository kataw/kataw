# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: oh,no
## Input

`````js
class A extends oh,no {}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "oh",
                    "rawText": "oh",
                    "flags": 768,
                    "start": 15,
                    "end": 18
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 18
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "no",
                "rawText": "no",
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "flags": 128,
            "start": 19,
            "end": 21
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 23,
                "end": 23
            },
            "flags": 128,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "class A extends oh,no {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ Statement expected - start: 18, end: 19
@{x2716}@ Unexpected token. - start: 21, end: 23

```

