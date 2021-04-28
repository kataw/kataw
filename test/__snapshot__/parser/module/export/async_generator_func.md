# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async function *f(){} foo
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 6,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 177,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 14,
                    "start": 512,
                    "end": 20
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 20,
                    "start": 0,
                    "end": 29
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 29,
                    "start": 512,
                    "end": 31
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 31,
                    "end": 32
                },
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
                "start": 14,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 36,
                "end": 40
            },
            "flags": 128,
            "start": 36,
            "end": 40
        }
    ],
    "isModule": true,
    "text": "export default async function *f(){} foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

