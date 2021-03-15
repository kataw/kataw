# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
abstract class C1 {}
declare abstract class C2 {}
export abstract class C3 {}
// `export abstract class {}` is not valid TypeScript.
export default abstract class { }
export default abstract class C4 { }
// `abstract class` is not valid as an expression.
export default abstract class C5 { abstract foo(): void; }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract class C1 {}\ndeclare abstract class C2 {}\nexport abstract class C3 {}\n// `export abstract class {}` is not valid TypeScript.\nexport default abstract class { }\nexport default abstract class C4 { }\n// `abstract class` is not valid as an expression.\nexport default abstract class C5 { abstract foo(): void; }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C1",
                "rawText": "C1",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 19,
                "end": 20
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 8,
            "end": 20
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C2",
                "rawText": "C2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 43,
                "end": 46
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 48,
                "end": 49
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 939556864,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 37,
            "end": 49
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C3",
                "rawText": "C3",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 71,
                "end": 74
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 76,
                "end": 77
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903744,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 65,
            "end": 77
        },
        {
            "kind": 48,
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 164,
                "end": 166
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903808,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 156,
            "end": 166
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C4",
                "rawText": "C4",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 196,
                "end": 199
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 201,
                "end": 203
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903808,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 190,
            "end": 203
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C5",
                "rawText": "C5",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 284,
                "end": 287
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 298,
                                "end": 302
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 303,
                                "end": 304
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 305,
                                "end": 310
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 302,
                            "end": 311
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 289,
                        "end": 311
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 289,
                "end": 313
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536871040,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 278,
            "end": 313
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 313
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

