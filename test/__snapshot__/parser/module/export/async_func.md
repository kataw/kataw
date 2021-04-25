# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async function f(){} foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 768,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 177,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 768,
                    "start": 14,
                    "end": 20
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 768,
                    "start": 20,
                    "end": 29
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 29,
                    "end": 31
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 31,
                    "end": 33
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 256,
                    "start": 33,
                    "end": 35
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 1280,
                "start": 14,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 35,
                "end": 39
            },
            "flags": 128,
            "start": 35,
            "end": 39
        }
    ],
    "isModule": true,
    "text": "export default async function f(){} foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

