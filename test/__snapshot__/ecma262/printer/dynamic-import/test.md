# Kataw parser test case

## Input

`````js
import("module.js");
import("module.js").then((a) => a);

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 201392131,
                    "text": "module.js",
                    "rawText": "\"module.js\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 27
                        },
                        "expression": {
                            "kind": 201392131,
                            "text": "module.js",
                            "rawText": "\"module.js\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 39
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 40
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "then",
                        "rawText": "then",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 45
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 20,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 49
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 52
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 54
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 54
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 54
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 20,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "import(\"module.js\");\nimport(\"module.js\").then((a) => a);\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
import("\"module.js\"");
import("\"module.js\"").then((a) => a);

```

### Diagnostics

```javascript
✔ No errors
```

