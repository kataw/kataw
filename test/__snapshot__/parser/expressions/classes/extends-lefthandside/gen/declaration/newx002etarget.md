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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
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
                    "kind": 211,
                    "name": {
                        "kind": 81921,
                        "text": "target",
                        "rawText": "target",
                        "flags": 768,
                        "start": 20,
                        "end": 26
                    },
                    "flags": 768,
                    "start": 15,
                    "end": 26
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 26
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 28,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "class A extends new.target {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 80,
            "error": "'new.target' only allowed within functions",
            "start": 20,
            "end": 26
        }
    ],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: new.target
## Input

`````js
class A extends new.target {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: new.target
## Input

`````js
class A extends new.target {}
`````
```

