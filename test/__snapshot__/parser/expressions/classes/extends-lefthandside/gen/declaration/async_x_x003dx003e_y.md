# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async
>          x => y
## Input

`````js
class A extends async
x => y {}
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
                    "kind": 81921,
                    "text": "async",
                    "rawText": "async",
                    "flags": 768,
                    "start": 15,
                    "end": 21
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 21
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
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 23,
                    "end": 26
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 26,
                    "end": 28
                },
                "flags": 256,
                "start": 21,
                "end": 28
            },
            "flags": 128,
            "start": 21,
            "end": 28
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "flags": 128,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "class A extends async\nx => y {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async
>          x => y
## Input

`````js
class A extends async
x => y {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async
>          x => y
## Input

`````js
class A extends async
x => y {}
`````
```

