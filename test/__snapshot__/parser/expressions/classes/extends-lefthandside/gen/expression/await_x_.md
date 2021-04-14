# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: await
>          x;
## Input

`````js
(class B extends await
x; {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 81921,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 16,
                            "end": 22
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 22
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 1,
                        "end": 1
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 22,
                "end": 24
            },
            "flags": 128,
            "start": 22,
            "end": 25
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 27,
                "end": 27
            },
            "flags": 128,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "(class B extends await\nx; {})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28,
            "end": 29
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
> :: test: expression
> :: case: await
>          x;
## Input

`````js
(class B extends await
x; {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: await
>          x;
## Input

`````js
(class B extends await
x; {})
`````
```

