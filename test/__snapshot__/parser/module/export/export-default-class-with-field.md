# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class {
  p: T;

  constructor() {
    this.p = 0;
  }
}
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
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 0,
                    "start": 14,
                    "end": 20
                },
                "name": null,
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 26
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 22,
                                "end": 26
                            }
                        ],
                        "flags": 32,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 20,
                    "start": 32,
                    "end": 26
                },
                "flags": 16,
                "start": 14,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 96,
                    "start": 30,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 46,
                    "end": 46
                },
                "flags": 268435488,
                "start": 30,
                "end": 47
            },
            "flags": 16,
            "start": 30,
            "end": 47
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 1,
                                    "start": 49,
                                    "end": 58
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 59,
                                    "end": 60
                                },
                                "flags": 536870944,
                                "start": 49,
                                "end": 60
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 60,
                                "end": 62
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 62,
                                "end": 64
                            },
                            "flags": 32,
                            "start": 49,
                            "end": 64
                        },
                        "flags": 16,
                        "start": 49,
                        "end": 65
                    }
                ],
                "flags": 17,
                "start": 49,
                "end": 65
            },
            "flags": 16,
            "start": 47,
            "end": 69
        }
    ],
    "isModule": true,
    "source": "export default class {\n  p: T;\n\n  constructor() {\n    this.p = 0;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 27
✖ Expected a `;` - start: 47, end: 49
✖ Declaration or statement expected - start: 69, end: 71

```

