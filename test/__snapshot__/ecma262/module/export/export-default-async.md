# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async function() { };
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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 29
                },
                "asteriskToken": null,
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 35
                },
                "returnType": null,
                "flags": 144,
                "transformFlags": 0,
                "start": 14,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 35,
            "end": 36
        }
    ],
    "isModule": true,
    "source": "export default async function() { };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
export default async function () {};
```

### Diagnostics

```javascript
✔ No errors
```

