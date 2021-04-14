# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function *(){}
## Input

`````js
class A extends async function *(){} {}
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
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 15,
                        "end": 21
                    },
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 21,
                        "end": 30
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 768,
                        "start": 30,
                        "end": 32
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 32,
                        "end": 34
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 35,
                            "end": 35
                        },
                        "flags": 256,
                        "start": 34,
                        "end": 36
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 3328,
                    "start": 15,
                    "end": 36
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 36
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 38,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "class A extends async function *(){} {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function *(){}
## Input

`````js
class A extends async function *(){} {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function *(){}
## Input

`````js
class A extends async function *(){} {}
`````
```

