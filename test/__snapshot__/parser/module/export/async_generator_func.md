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

### CST

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
                "flags": 0,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 14,
                    "end": 20
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 20,
                    "end": 29
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 29,
                    "end": 31
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 31,
                    "end": 32
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 32,
                    "end": 34
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 36
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 400,
                "start": 14,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 36,
                "end": 40
            },
            "flags": 16,
            "start": 36,
            "end": 40
        }
    ],
    "isModule": true,
    "source": "export default async function *f(){} foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

 default async function* f() {};
foo;
```

### Diagnostics

```javascript
✔ No errors
```

