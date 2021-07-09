# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/module/export/async-await-module-errors/gen/stand-alone
> :: test: stand-alone
> :: case: export default async function await() {
## Options

`````js
{"module":true}
`````
## Input

`````js
export default async function await() {
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
                "name": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 35
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 36
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 39
                },
                "returnType": null,
                "flags": 144,
                "transformFlags": 0,
                "start": 14,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": true,
    "source": "export default async function await() {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 29, end: 35
✖ The parser expected to find a '}' to match the '{' token here - start: 38, end: 39

```

